import React from "react";
import { Progress } from 'reactstrap';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>ESPACIOS DISPONIBLES:</h1>
			<br></br>
			<div class="container text-center ">
				<div class="row justify-content-around">

					<div class="col-3 border border-primary rounded p-2 align-self-center">
						<h1>Piso 1</h1>
						<img width="400px" height="400px" src="https://i.pinimg.com/originals/65/5d/2d/655d2da400a648abca600766a89deead.gif" class="img-fluid" alt="Responsive image" />
						<Progress value="60">60%</Progress>
					</div>
					<div class="col-3 border border-primary rounded p-2 align-self-center">
						<h1>Piso 2</h1>
						<img width="400px" height="400px" src="https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif" class="img-fluid" alt="Responsive image" />
						<Progress color="info" value="25">25%</Progress>
					</div>
					<div class="col-3 border border-primary rounded p-2 align-self-center">
						<h1>Piso 3</h1>
						<img class="img-fluid" width="400px" height="400px" src="https://i.gifer.com/origin/9a/9a67a88321b1e57b5ee81e3f3e6543dd.gif" />
						<Progress color="success" value="80">80%</Progress>
					</div>
				</div>
			</div>




		</div>
	);
};

export default Home;
