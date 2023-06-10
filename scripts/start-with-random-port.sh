#!/bin/bash

# Function to check if a port is in use
is_port_in_use() {
  local port=$1
  (echo >/dev/tcp/127.0.0.1/$port) &>/dev/null && return 0 || return 1
}

# Function to get a random port from the desired range
get_random_port() {
  local random_port=$(( ( RANDOM % 9 ) + 8081 ))
  echo $random_port
}

# Find an available port in the specified range
available_port=""
while [ -z "$available_port" ]; do
  candidate_port=$(get_random_port)
  if ! is_port_in_use "$candidate_port"; then
    available_port="$candidate_port"
  fi
done

# Export the HOST_PORT environment variable
export HOST_PORT=$available_port

# Start the application, replacing "npm run start:dev" with the appropriate command for your app
npm run start:dev
