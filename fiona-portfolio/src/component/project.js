import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, IconButton ,Card , CardTitle , CardActions , Button, CardText, CardMenu } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                    {/* Pizza UTO Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/pizzaUTO.png) center / cover'}}>
                            Pizza UTO
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                         web application for a singular restaurant where a user can order for pick-up. The web app use Twilio API
to communicate with the restaurant (SMS text) about a new order placed.  Frameworks: Express, node, Ajax.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/midterm-project-6" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Twitter Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/with.png) center / cover'}}>
                            Scepter Tweet
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                            Scepter Tweet is a single page Twitter clone project powered by AJAX. Frameworks: Express, jQuery, MongoDB, Node, SASS
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/tweeter" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Tiny App Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/TinyURL.png) center / cover'}}>
                            Tiny Scepter
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                            Tiny Scepter is a full stack web application built with Node and Express that allow users to shorten urls (like bit.ly).

                            Frameworks: Express, Node
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/TinyApp-Project" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Monster-Rolodex project */}
                    <Card shadow={5} className="card">
                    <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/monster.png) center / cover'}}>
                        Monster Rolodex
                    </CardTitle>
                    <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                    Monsters Rolodex is a project is a display platform to display numbers of Monsters and its information. Users can search specific monster by type in letters which contains in its name on the search bar. 
                    Framework: React.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/Fionalan727/monsters-rolodex" rel="noopener noreferrer" target="_blank">
                            <Button clolored>Github</Button>
                        </a>
                        <a href="https://fionalan727.github.io/monsters-rolodex/" rel="noopener noreferrer" target="_blank">
                            <Button clolored>Website</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color:'grey'}}>
                    <IconButton name="share"/>
                    </CardMenu>
                    </Card>
                    {/* Better-Bytes project */}
                     <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/betterbytes.png) center / cover'}}>
                            Better-Bytes
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                        Better Bytes was a passionately collaborative project, meant to provide users with delicious new meal ideas, sorted by the lowest price and location and finalized into a grocery list.
                        Frameworks: Express, Node,React, Cheerio.js.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/Better-Bytes" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Chatty Scepter Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/chatty.png) center / cover'}}>
                            Chatty Scepter
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                        Designed a client-side SPA(single-page application)that allows multiple users to chat with each other. The client-side
app,built with ReactJS,communicates with a server via Web Sockets for multi-user real-time updates.
Frameworks: Express, Node, React, Web Sockets, Web-pack
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/Chatty-App" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Pattern */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/pattern.png) center / cover'}}>
                        Pattern                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                        One page responsive website made by Bootstrap 4, HTML, CSS and jQuery
                        </CardText>
                        <CardActions border>
                            <a href="https://fionalan727.github.io/Pattern/" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Website</Button>
                            </a>
                            <a href="https://github.com/Fionalan727/Pattern" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* Candy Museum */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(https://Fionalan727.github.io/Portfolio/images/candy.png) center / cover'}}>
                            Museum Of Candy
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                        One page responsive website made by Bootstrap 4, HTML, CSS only
                        </CardText>
                        <CardActions border>
                            <a href="https://fionalan727.github.io/MuseumOfCandy/" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Website</Button>
                            </a>
                            <a href="https://github.com/Fionalan727/MuseumOfCandy" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Express</Tab>
                    <Tab style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>React</Tab>
                    <Tab style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Bootstrap/API</Tab>
                   
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                         </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
} ;
   
  
export default Projects;