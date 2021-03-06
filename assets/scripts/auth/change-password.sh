#!/bin/bash

curl "http://localhost:4741/change-password/${ID}" \
 --include \
 --request PATCH \
 --header "Authorization: Token token=${TOKEN}" \
 --header "Content-Type: application/json" \
 --data '{
   "passwords": {
     "old": "'"${OLDPW}"'",
     "new": "'"${NEWPW}"'"
   }
 }'

echo
