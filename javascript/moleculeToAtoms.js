// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

 var water = 'H2O';
console.log(parseMolecule(water));    // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

function parseMolecule(formula) {
	const BRACKET_OPENER_REGEXP = /\[|\{|\(/;
	const BRACKET_CLOSER_REGEXP = /\]|\}|\)/;
	const VALID_ATOM_REGEXP = /^[A-Z][a-z]?$/;
	const MULTIPLIER_REGEXP = /^\d+/;

	function createGroup(parent = {}) {
		return {atoms : {}, groups : [], multiplier : 1, parent};
	}

	function extractGroups(str) {
		const collection = createGroup();
		let currentGroup = collection;

		for (let i = 0; i < str.length; i++) {
			const currentChar = str[i];
			let isCloser = false;
			let atom;
			let multiplier = 1;

			if (BRACKET_OPENER_REGEXP.test(currentChar)) {
				// move down one level
				const parentGroup = currentGroup;
				currentGroup = createGroup(parentGroup);
				parentGroup.groups.push(currentGroup);

				continue;
			}
			else if (BRACKET_CLOSER_REGEXP.test(currentChar)) {
				// move up one level
				isCloser = true;
			}
			else if (VALID_ATOM_REGEXP.test(currentChar)) {
				const currentChar = str[i];
				const extendedChars = currentChar + str[i + 1];
				atom = currentChar;

				if (VALID_ATOM_REGEXP.test(extendedChars)) {
					atom = extendedChars;
					i++;
				}
			}

			// look at following chars for multiplier
			const multiplierMatch = str.slice(i + 1).match(MULTIPLIER_REGEXP);

			if (multiplierMatch) {
				const multiplierStr = multiplierMatch[0];
				multiplier = +multiplierStr;
				i += multiplierStr.length;
			}

			if (isCloser) {
				currentGroup.multiplier = multiplier;
				currentGroup = currentGroup.parent;
			}
			else {
				const currentAtomCount = currentGroup.atoms[atom] || 0;
				currentGroup.atoms[atom] = currentAtomCount + multiplier;
			}
		}

		return collection;
	}

	function sumGroup(group, cumulatedMultiplier = 1, acc = {}) {
		const {groups, multiplier, atoms} = group;

		cumulatedMultiplier *= multiplier;

		for (let i = 0; i < groups.length; i++) {
			sumGroup(groups[i], cumulatedMultiplier, acc);
		}

		// Object.entries cannot be used yet on codewars :(
		Object.keys(atoms).forEach(atom => {
			const prevCount = acc[atom] || 0;
			const count = atoms[atom];

			acc[atom] = prevCount + (count * cumulatedMultiplier);
		});

		return acc;
	}

	const collection = extractGroups(formula);
	return sumGroup(collection);
}

