module.exports = {
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md",
    },
  },
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs",
    commitMessage: "chore: release v${version}",
    requireCleanWorkingDir: false,
  },
  hooks: {
    "after:bump": "npx auto-changelog -p",
  },
  github: {
    release: true,
  },
};
