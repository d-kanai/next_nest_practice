#yarn start &
while :
do
  curl -s http://localhost:3000 > /dev/null
  if [ "$?" = "0" ]; then
      echo 'alive!'
      break
  else
      echo 'wait for backend start...'
      sleep 1
  fi
done
