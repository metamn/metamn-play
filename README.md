- do not use sudo !! : http://stackoverflow.com/questions/19352976/npm-modules-wont-install-globally-without-sudo

- on deploying the node_modules is wiped when checking out gh-pages. when restoring the dev branch the node_modules are checked out from git BUT they don't work. the entire folder must be deleted and regenerated with npm install
- a workaround is:

1. do not check in node_modules to git (add to gitignore)
2. save a copy of node_modules into ~/tmp/metamn
3. after deployment & checking out the dev repo copy node_modules back from /tmp
4. 
