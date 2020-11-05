docker run --rm -v $(pwd):/srv/jekyll -v $(pwd)/_site:/srv/jekyll/_site -p 4000:4000 jekyll/jekyll:latest /bin/bash -c "chmod 777 /srv/jekyll && jekyll clean && jekyll serve"
