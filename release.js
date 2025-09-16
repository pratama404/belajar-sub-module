function isReleaseVersion(version) {
    return !version.includes('alpha') && !version.includes('beta') && !version.includes('rc');
}
