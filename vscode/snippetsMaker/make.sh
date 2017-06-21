#!/bin/bash

cat ./input.js | awk '{printf "%s\\n", $0}' > ./output.txt

#echo -e "{\n\t\"${snippet}\":{\n\t\t\"prefix\": \"${prefix}\",\n\t\t\"body\": \"${res}\",\n\t\t\"description\": \"${desc}\"\n\t}\n}," >> process.txt
