SRC_PATH = src/

dev: \
	scss_lint \
	start

scss_lint:
	@echo "## LINTING SCSS ##"
	sass-lint -v $(SRC_PATH)app/*.scss, $(SRC_PATH)scss/*.scss
	# sass-lint --config .sass-lint.yml '**/*.scss' --verbose --no-exit
	@echo "## LINTING SCSS DONE ##"
	touch $@

start:
	npm run-script start-open