function Fly(){
				tFly = new Sprite(scene, "images/fly.png", 20, 20);
				tFly.setSpeed(10);
				tFly.wriggle = function(){
					newDir = (Math.random() * 90) - 45;
					this.changeAngleBy(newDir);
				}
				tFly.reset = function(){
					newX = Math.random() * this.cWidth;
					newY = Math.random() * this.cHeight;
					this.setPosition(newX, newY);
				}
				
				tFly.reset();
				
				return tFly;
			}
			
function Frog(){
			tFrog = new Sprite(scene, "images/frog.jpg", 50, 50);
			tFrog.maxSpeed = 10;
			tFrog.minSpeed = -3;
			tFrog.setSpeed(0);
			tFrog.setAngle(0);
			
			tFrog.checkKeys = function(){
				if (keysDown[K_LEFT]){
					this.changeAngleBy(-5);
				}
				if (keysDown[K_RIGHT]){
					this.changeAngleBy(5);
				}
				if (keysDown[K_UP]){
					this.changeSpeedBy(1);
					if(this.speed > this.maxSpeed)
						this.setSpeed(this.maxSpeed);
				}
				if (keysDown[K_DOWN]){
					this.changeSpeedBy(-1);
					if(this.speed < this.minSpeed)
						this.setSpeed(this.minSpeed);
				}
			}
			
			return tFrog;
		}			