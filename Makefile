install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
brain-gsd:
	node bin/games/brain-gsd.js
brain-progression:
	node bin/games/brain-progression.js
brain-prime:
	node bin/games/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
