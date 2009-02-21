require 'rake'
require 'rake/packagetask'

PROTOTYPE_ROOT     = File.expand_path(File.dirname(__FILE__))
PROTOTYPE_SRC_DIR  = File.join(PROTOTYPE_ROOT, 'src')
PROTOTYPE_DIST_DIR = File.join(PROTOTYPE_ROOT, 'dist')
PROTOTYPE_PKG_DIR  = File.join(PROTOTYPE_ROOT, 'pkg')
PROTOTYPE_TEST_DIR = File.join(PROTOTYPE_ROOT, 'test')
PROTOTYPE_TMP_DIR  = File.join(PROTOTYPE_TEST_DIR, 'unit', 'tmp')
PROTOTYPE_VERSION  = '1.6.0.3'

task :default => [:dist, :package, :clean_package_source]

desc "Builds the distribution."
task :dist do
  $:.unshift File.join(PROTOTYPE_ROOT, 'lib')
  require 'protodoc'
  
  Dir.chdir(PROTOTYPE_SRC_DIR) do
    File.open(File.join(PROTOTYPE_DIST_DIR, 'prototype.js'), 'w+') do |dist|
      dist << Protodoc::Preprocessor.new('prototype.js')
    end
  end
end

Rake::PackageTask.new('prototype', PROTOTYPE_VERSION) do |package|
  package.need_tar_gz = true
  package.package_dir = PROTOTYPE_PKG_DIR
  package.package_files.include(
    '[A-Z]*',
    'dist/prototype.js',
    'lib/**',
    'src/**',
    'test/**'
  )
end

desc "Builds the distribution and the test suite"
task :test => [:dist, :build_unit_tests]

require 'test/lib/jstest'

# Override PageBuilder extension
class PageBuilder
  def destination
    name_file(:ext => 'asp')
  end
end

task :build_unit_tests => [:clean_tmp] do
  puts "Building tests"
  Dir[File.join('test', 'unit', '*_test.js')].each do |file|
    PageBuilder.new(file, 'prototype.erb').render
  end
end

task :clean_package_source do
  rm_rf File.join(PROTOTYPE_PKG_DIR, "prototype-#{PROTOTYPE_VERSION}")
end

desc 'Generates an empty tmp directory for building tests.'
task :clean_tmp do
  puts 'Generating an empty tmp directory for building tests.'
  FileUtils.rm_rf(PROTOTYPE_TMP_DIR) if File.exist?(PROTOTYPE_TMP_DIR)
  Dir.mkdir(PROTOTYPE_TMP_DIR)
end
