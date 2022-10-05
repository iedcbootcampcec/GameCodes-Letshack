import json
import turtle as t
import os
import random
import time


#initializing variables
playerAscore=0
playerBscore=0
aWonLast=False
 
#create a window and declare a variable called window and call the screen()
window=t.Screen()
window.title("The Pong Game")
window.bgcolor("black")
window.setup(width=800,height=600)
window.tracer(0)
 
#Creating the left paddle
leftpaddle=t.Turtle()
leftpaddle.speed(0)
leftpaddle.shape("square")
leftpaddle.color("white")
leftpaddle.shapesize(stretch_wid=5,stretch_len=1)
leftpaddle.penup()
leftpaddle.goto(-350,0)
 
#Creating the right paddle
rightpaddle=t.Turtle()
rightpaddle.speed(0)
rightpaddle.shape("square")
rightpaddle.color("white")
rightpaddle.shapesize(stretch_wid=5,stretch_len=1)
rightpaddle.penup()
rightpaddle.goto(350,0)
 
#Code for creating the ball
ball=t.Turtle()
ball.speed(0)
ball.shape("circle")
ball.color("red")
ball.penup()
ball.goto(0,0)
ballxdirection=0.0
ballydirection=0.0
 
#divider
central_line=t.Turtle()
central_line.speed(0)
central_line.shape("square")
central_line.color("green")
central_line.shapesize(28,0.05)
central_line.penup()
central_line.goto(-0.3,-15)

#Code for creating pen for scorecard update
pen=t.Turtle()
pen.speed(0)
pen.color("Blue")
pen.penup()
pen.hideturtle()
pen.goto(0,270)
pen.write("SCORE",align="center",font=('Arial',20,'bold'))

#code to start and resume the game
def gameStart():
    global ballxdirection
    global ballydirection
    global aWonLast

    assert ballxdirection == 0
    assert ballydirection == 0

    if aWonLast:
        ballxdirection = 0.3
    else:
        ballxdirection = -0.3
    random.seed(time.localtime)
    ballydirection = random.randint(1,6)/10

#code for moving the leftpaddle
def leftpaddleup():
    y=leftpaddle.ycor()
    y=y+40
    leftpaddle.sety(y)
 
def leftpaddledown():
    y=leftpaddle.ycor()
    y=y-40
    leftpaddle.sety(y)
 
#code for moving the rightpaddle
def rightpaddleup():
    y=rightpaddle.ycor()
    y=y+40
    rightpaddle.sety(y)
 
def rightpaddledown():
    y=rightpaddle.ycor()
    y=y-40
    rightpaddle.sety(y)
 
#Assign keys to play
window.listen()
window.onkeypress(leftpaddleup,'w')
window.onkeypress(leftpaddledown,'s')
window.onkeypress(rightpaddleup,'Up')
window.onkeypress(rightpaddledown,'Down')
window.onkeypress(gameStart, "space")
 
while True:
    window.update()
 
    #moving the ball
    ball.setx(ball.xcor()+ballxdirection)
    ball.sety(ball.ycor()+ballydirection)
 
    #border set up
    if ball.ycor()>290:
        ballydirection=ballydirection*-1
    if ball.ycor()<-290:
        ballydirection=ballydirection*-1
         
    # Handling paddles missing the ball
    if ball.xcor() > 360:
        aWonLast = True
        ball.goto(0,0)
        ballxdirection = 0
        ballydirection = 0
        playerAscore = playerAscore + 1
        pen.clear()
        pen.write("{} v {}".format(playerAscore,playerBscore),align="center",font=('Monaco',15,"bold"))
        # os.system("afplay wallhit.wav&")
 
    if(ball.xcor()) < -360:
        aWonLast = False
        ball.goto(0,0)
        ballxdirection = 0
        ballydirection = 0
        playerBscore = playerBscore + 1
        pen.clear()
        pen.goto(0,270)
        pen.write("{} v {}".format(playerAscore,playerBscore),align="center",font=('Monaco',15,"bold"))
        # os.system("afplay wallhit.wav&")
 
    # Handling the collisions with paddles.
    if(ball.xcor() > 345) and (ball.xcor() < 355) and (ball.ycor() < rightpaddle.ycor() + 60 and ball.ycor() > rightpaddle.ycor() - 60):
        ballxdirection = (ballxdirection+0.05) * -1
        # os.system("afplay paddle.wav&")
 
    if(ball.xcor() < -345) and (ball.xcor() > -355) and (ball.ycor() < leftpaddle.ycor() + 60 and ball.ycor() > leftpaddle.ycor() - 60):
        ballxdirection = (ballxdirection-0.05) * -1
        # os.system("afplay paddle.wav&")
