# rock-paper-scissors

This is a rock-paper-scissors game between a user and computer.
![image](https://github.com/user-attachments/assets/49763480-f313-4979-bb0f-2f58345b7f72)

This game can be played from your local machine if you have the source code.
I have dockerized this game too !!

Dockerfile contains the image build code.

I followed below steps to run this app in docker container-

1) Wrote Dockerfile. Using nginx to host the game (since this game has static pages only)
2) docker build -t <-name of image I want to give-> . This gave me an image.
3) Used the image generated in step 2 to run the container. docker run -p 8080:80 <-image_name->
4) Play-With-Docker exposed the port for me and I was able to access the game on port 8080. http://ip172-18-0-3-ctsmn2iim2rg00a5ab4g-8080.direct.labs.play-with-docker.com/ 

Static File Hosting: The index.html file (along with other assets like CSS or JS) is copied to /usr/share/nginx/html, the default location where Nginx serves files.

CMD: The CMD ["nginx", "-g", "daemon off;"] ensures Nginx runs in the foreground, serving your index.html.
