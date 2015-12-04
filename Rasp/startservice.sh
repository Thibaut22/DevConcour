#!/bin/sh

time=120

while true
do	

	if [ $time -ge 120 ]
	then
		rm tmp.txt
		echo > tmp.txt
		pkill node
		echo fin js
		echo start
		node index.js		
	fi	
		
	sleep 30s
	
	test=$(date -r tmp.txt '+%s')
	actuelle=$(date '+%s')


	time=$(($actuelle- $test))
done