.PHONY: build setup format lint

# Python scripts
# (use npm for JavaScript)

start:
	@jupyter-lab

setup:
	@poetry install
	@printf "\x1B[01;93m✔ Setup complete\n\x1B[0m"

format:
	@black -q .

lint:
	@bandit -qr .
	@flake8 .
