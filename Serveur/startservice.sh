#!/bin/sh
cd ../../opt/gclc

time=120

while true
do
	
	if [ $time -ge 120 ]
	then
		rm gclc.log
		pkill nc
		echo 'fin'
		echo 'start'
		nc -l -p 8080 > gclc.log &
		time=0		
	fi	
		
	sleep 30s
	
	test=$(date -r gclc.log '+%s')
	actuelle=$(date '+%s')


	time=$(($actuelle- $test))
done