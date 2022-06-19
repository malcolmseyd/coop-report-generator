#!/bin/bash
tlmgr init-usertree

tlmgr --verify-repo=none update --self

tlmgr --verify-repo=none install \
	graphics \
	subfigure \
	framed \
	biblatex \
	logreq \
	biblatex-ieee \
