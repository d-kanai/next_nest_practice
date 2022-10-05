#yarn start &
while :
do
  lsof -i:3000
  if [ "$?" = "0" ]; then
      echo 'alive!'
      break
  else
      echo 'wait for backend start...'
      sleep 1
  fi
done
