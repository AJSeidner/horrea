var React = require('react');
var Router = require('react-router');

var Main = React.createClass({
	render: function() {
		return (

            <div className = "main-container">

            <div className = "container">

            	<div className = "jumbotron" id = "title">
		            <h1 className = "center-align"> Horrea </h1> 
		            <h3 className = "center-algin"> inventory management database </h3>
            	</div>
            </div> 


            <main>
            <div className = "container">
	            <form action = "/login" method = "POST"className = "form-signin">
		            <h2 className = "form-signin-heading" id = "please-sign-in"> please sign in </h2>

		            <input type = "text" id = "username" className = "form-control" name = "username" placeholder = "Username/Email" required autofocus >
		            <label for = "inputPassword"className = "sr-only" > Password < /label> 
		            <input type = "password" id = "password" className = "form-control" name = "password" placeholder = "Password" required>
		            <button className = "btn btn-lg btn-primary btn-block" type = "submit"id = "signIn" > Sign in </button> 
	            </form>
            </div>

           
            <div className = "row pull-right" >
          
            	<button type = "button" className = "btn btn-default btn-sm" data - toggle = "modal" data - target = "#myModal">see test users credentials</button>


            		<div className = "modal fade" id = "myModal"ntabindex = "-1" role = "dialog" aria - labelledby = "myModalLabel">
            			<div className = "modal-dialog" role = "document">
            				<div className = "modal-content">
            					<div className = "modal-header">
            						<button type = "button" className = "close" data - dismiss = "modal" aria - label = "Close" > < span aria - hidden = "true"> & times; </span></button >
            						<h4 className = "modal-title" id = "myModalLabel"> Testing credentials </h4> 
            					</div> 
            					<div className = "modal-body" >
            						<p> The following credentials are for testing purpose.Please use the info below to login. </p> 
            						<p>Manager:<br>username: matt @test.com <br> pwd: matt </p> 
            						<p>Staff: <br>username: shay @test.com <br>pwd: shay </p> 
            					</div> 
            					<div className = "modal-footer">
            						<button type = "button" className = "btn btn-default" data - dismiss = "modal" > Close </button> 
           						</div> 
            				</div> 
            			</div> 
            		</div> 
            </div> 
            </main>

            </div>

        )

    }

});

module.exports = Main;