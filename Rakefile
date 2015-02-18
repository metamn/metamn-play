# http://blog.nitrous.io/2013/08/30/using-jekyll-plugins-on-github-pages.html


require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Publish to gh-pages"
task :publish do
  Dir.mktmpdir do |tmp|
    system "cp -r dist/* #{tmp}"
    system "git checkout gh-pages"
    system "rm -rf *"
    system "mv #{tmp}/* ."
    message = "Site updated at #{Time.now.utc}"
    system "git add ."
    system "git commit -am #{message.shellescape}"
    system "git push origin gh-pages"
    system "echo done."
  end
end

task :default => :publish
