build:
	docker-compose build

run:
	docker-compose up

dev:
	docker-compose -f docker-compose.dev.yml up --abort-on-container-exit
