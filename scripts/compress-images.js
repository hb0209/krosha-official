import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir, stat, copyFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../src/assets/product');
const tempDir = join(__dirname, '../src/assets/product/.temp-compressed');

// Check if --replace flag is passed
const replaceOriginals = process.argv.includes('--replace');

async function compressImages() {
  try {
    console.log('🖼️  Starting image compression...\n');

    // Get all image files (exclude temp and backup folders)
    const files = await readdir(inputDir);
    const imageFiles = files.filter(
      (file) =>
        (file.endsWith('.png') ||
          file.endsWith('.jpg') ||
          file.endsWith('.jpeg') ||
          file.endsWith('.webp')) &&
        !file.startsWith('.')
    );

    if (imageFiles.length === 0) {
      console.log('❌ No image files found in src/assets/product/');
      return;
    }

    console.log(`📦 Found ${imageFiles.length} image(s) to compress:\n`);

    // Show original sizes
    let totalOriginalSize = 0;
    for (const file of imageFiles) {
      const filePath = join(inputDir, file);
      const stats = await stat(filePath);
      const sizeInMB = stats.size / (1024 * 1024);
      totalOriginalSize += stats.size;
      console.log(`  📄 ${file}: ${sizeInMB.toFixed(2)} MB`);
    }

    console.log(`\n📊 Total size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB\n`);
    console.log('⏳ Compressing images...\n');

    // Create temp directory
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true });
    }

    // Compress images
    const compressedFiles = await imagemin([`${inputDir}/*.{jpg,jpeg,png,webp}`], {
      destination: tempDir,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.6, 0.8],
          speed: 4,
        }),
      ],
    });

    if (compressedFiles.length === 0) {
      console.log('❌ No files were compressed');
      return;
    }

    console.log('✅ Compression complete!\n');
    console.log('📊 Results:\n');

    let totalCompressedSize = 0;
    // Show comparison and replace if flag is set
    for (const compressed of compressedFiles) {
      const fileName = compressed.sourcePath.split('/').pop();
      const originalPath = join(inputDir, fileName);
      const originalStats = await stat(originalPath);
      const compressedStats = await stat(compressed.destinationPath);

      const originalSize = originalStats.size / (1024 * 1024);
      const compressedSize = compressedStats.size / (1024 * 1024);
      totalCompressedSize += compressedStats.size;
      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      console.log(`  📄 ${fileName}:`);
      console.log(`     Before: ${originalSize.toFixed(2)} MB`);
      console.log(`     After:  ${compressedSize.toFixed(2)} MB`);
      console.log(`     Saved:  ${savings}% 🎉`);

      // Replace original if --replace flag is set
      if (replaceOriginals) {
        await copyFile(compressed.destinationPath, originalPath);
        console.log(`     ✅ Replaced original\n`);
      } else {
        console.log('');
      }
    }

    const totalSavings = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(1);
    console.log(`\n💾 Total savings: ${totalSavings}%`);
    console.log(`   Before: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`   After:  ${(totalCompressedSize / (1024 * 1024)).toFixed(2)} MB\n`);

    if (replaceOriginals) {
      console.log('✅ Original images have been replaced with compressed versions!\n');
    } else {
      console.log('💡 Compressed images are in: src/assets/product/.temp-compressed/');
      console.log('   To replace originals automatically, run: npm run compress-images -- --replace\n');
    }
  } catch (error) {
    console.error('❌ Error compressing images:', error.message);
    process.exit(1);
  }
}

compressImages();

