function diskStacking(disks) {
	disks.sort((a,b) => a[2] - b[2]);
  const maxDP = new Array(disks.length).fill(0);
	const idxDP = new Array(disks.length).fill(null);
	maxDP[0] = disks[0][2];
	let globalMax = 0;

	for (let i = 1; i < disks.length; i++) {
		const curDisk = disks[i];

		let maxHeight = curDisk[2];
		if (maxHeight > maxDP[globalMax]) globalMax = i;

		for (let j = 0; j < i; j++) {
			if (disks[j][0] < curDisk[0] && disks[j][1] < curDisk[1] && disks[j][2] < curDisk[2]) {
			  const newHeight = curDisk[2] + maxDP[j];

			  if (newHeight > maxHeight) {
			    maxHeight = newHeight;
			    idxDP[i] = j;
			    if (maxHeight > maxDP[globalMax]) globalMax = i;
			  }
			}
		}
		maxDP[i] = maxHeight;

	}

	const sol = [globalMax];

	while (idxDP[globalMax] !== null) {
	  sol.unshift(idxDP[globalMax]);
	  globalMax = idxDP[globalMax];
	}
	return sol.map(idx => disks[idx]);
}
