guard :copy, from: 'src/assets', to: 'dist/unite@tewald.gmail.com/assets', mkpath: true, run_at_start: true
guard :copy, from: 'src/meta', to: 'dist/unite@tewald.gmail.com', mkpath: true, run_at_start: true

guard 'sprockets', destination: 'dist/unite@tewald.gmail.com', asset_paths: ['src/sass'] do
  watch (%r{src/sass/stylesheet.sass}) { 'dist/unite@tewald.gmail.com/stylesheet.css' }
  watch (%r{src/sass/buttons-left.sass}) { 'dist/unite@tewald.gmail.com/buttons-left.css' }
  watch (%r{src/sass/buttons-right.sass}) { 'dist/unite@tewald.gmail.com/buttons-right.css' }
end

guard 'sprockets', destination: 'dist/unite@tewald.gmail.com', asset_paths: ['src/js'] do
  watch (%r{src/js/*}) { 'dist/unite@tewald.gmail.com/extension.js' }
end
