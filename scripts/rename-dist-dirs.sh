#!/bin/bash

DIST_DIR="./dist"

# Check if dist directory exists
if [ -d "$DIST_DIR" ]; then
  # Iterate over directories in dist
  for dir in "$DIST_DIR"/~*; do
    if [ -d "$dir" ]; then
      # Remove the tilde from the directory name
      new_dir=$(echo "$dir" | sed 's/~//')
      mv "$dir" "$new_dir"
      echo "Renamed $dir to $new_dir"
    fi
  done
else
  echo "Dist directory does not exist."
fi