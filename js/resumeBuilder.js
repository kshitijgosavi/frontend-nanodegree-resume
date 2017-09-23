/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio//
var $;
var bio = { name: 'Kshitij Gosavi',
	        role: 'Web Developer',
	        contacts: { mobile: '8108847630',
		    	  		email: 'kshigos@gmail.com',
		    	  		github: 'kshitijgosavi',
		    	  		location: 'Mumbai'
		     	 	  },
	        welcomeMessage: 'WELCOME KSHITIJ!',
	        skills: ['Analysing',
	            	 'Problem Solving',
	            	 'Debugging Skill',
	            	 'Communication Skills'
	             	],
	        biopic:'images/ksh.lnk'
		  };


			bio.display = function() {
				var formattedName = HTMLheaderName.replace('%data%',bio.name);
				var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
				var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
				var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
				var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
				var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
				var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
				var formattedBiopic = HTMLbioPic.replace('%data%',bio.biopic);


				$('#header').prepend(formattedName,formattedRole).append( $('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocation)).append(formattedWelcomeMsg,formattedBiopic);

				$('#header').append(HTMLskillsStart);
				if (bio.skills.length>0) {
					bio.skills.forEach( function(i) {
						var formattedSkills = HTMLskills.replace('%data%',i);
						$('#skills').append(formattedSkills);
				    	}
					);
				}

				//footer//
				$('#footerContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

			};

			bio.display();

	    //to internationalize name in bio//

		function inName(name) {
   			var x= name.split(' ');
    		x[0]=x[0].slice(0,1).toUpperCase()+x[0].slice(1).toLowerCase();
    		x[1]=x[1].toUpperCase();
   			var finalName=x.join(' ');
			return finalName;
		}
		$('#main').append(internationalizeButton);



//work//
//Mentioned Work Experince is not true. I am fresher//
var work = { jobs: [{ employer: 'Bharat-Benz',
	        		  title: 'Technician',
	        		  location: 'Chennai,India',
	        		  dates: 'December,2015',
	        	 	  description: 'To work with complex systems or perform highly technical mechanical or diagnostic tests'+
	        	 				   '. Depending on the field, technicians may work independently or under the direction of a professional.',
	    			  url: 'http://www.bharatbenz.com/pressdetails.php?pr=75'
	    			},
	    			{ employer: 'Bharat Electronics',
		        	  title: 'Debugger' ,
		        	  location: 'Mumbai,India' ,
		        	  dates: 'December,2016',
	        		  description: 'To analize the given circuit and find out the problem in circuit and find appropriate solution.',
	    			  url: 'http://www.bel-india.com/'
    				}
    			]
    		};

			work.display = function() {
				var i;
    			for(i=0;i<work.jobs.length;i++) {
		    		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer).replace('#',work.jobs[i].url);
		    		var formattedTitle =  HTMLworkTitle.replace('%data%',work.jobs[i].title);
		    		var formattedEmployerTitle = formattedEmployer.concat(formattedTitle);
				    var formattedLoc =  HTMLworkLocation.replace('%data%',work.jobs[i].location);
				    var formattedDates =  HTMLworkDates.replace('%data%',work.jobs[i].dates);
				    var formattedDescription =  HTMLworkDescription.replace('%data%',work.jobs[i].description);

				    $('#workExperience').append( HTMLworkStart);
				   	$('.work-entry:last').append(formattedEmployerTitle);
				    $('.work-entry:last').append(formattedDates);
				    $('.work-entry:last').append(formattedLoc);
				    $('.work-entry:last').append(formattedDescription);

				}
			};
			work.display();


	//Projects//

var projects = { projects: [{ title: 'Tire inflation System',
          					  dates: 'May-2015',
          					  description: 'Designing of a system, ‘Automatic Air filling in Tire’'+
          								   '(A system in which air is filled in tire of any vehicle when the tire pressure is low)'+
          								   'under the guidance of Prof. Manoj Gofane.',
			    			  images: ['images/A1.jpg','images/A2.jpg'],
			    			  url: 'http://www.psitireinflation.com/'
			   				},
			   				{ title: 'Antitheft System',
          					  dates: 'May-2016',
          					  description: 'Project based on ‘Anti-theft system for automobiles’'+
          								   '(A system in which driver gets location of his vehicle and has an ability to stop the vehicle)'+
          								   'under the guidance of Prof. G. T. Haldankar.',
          	    			  images: ['images/B1.jpg'],
          	    			  url: 'https://www.supersafeworld.com/two-wheeler-gps-tracking-device-for-bikes/'
          	   				}
						]
					};



					projects.display = function() {
						var i;
						for(i=0;i<projects.projects.length;i++) {
	    					var updatedTitle =  HTMLprojectTitle.replace('%data%',projects.projects[i].title).replace('#',projects.projects[i].url);
				    		var updatedDates =  HTMLprojectDates.replace('%data%',projects.projects[i].dates);
				    		var updatedDescription =  HTMLprojectDescription.replace('%data%',projects.projects[i].description);

					    	$('#projects').append( HTMLprojectStart);
					   		$('.project-entry:last').append(updatedTitle);
					    	$('.project-entry:last').append(updatedDates);
					    	$('.project-entry:last').append(updatedDescription);



							if(projects.projects[i].images.length>0) {
								projects.projects[i].images.forEach(function (j) {
								var updatedImages = HTMLprojectImage.replace('%data%',j);
								$('.project-entry:last').append(updatedImages);

								});

							}

						}

					};
					projects.display();


//education//


var education = { schools: [{ name: 'Patkar Varde College',
			    			  location: 'Mumbai, India',
						      degree: 'HSC (Science)',
						      majors: ['Electronics'],
						      dates: '2011-2013',
						      url: 'http://www.patkarvardecollege.edu.in/'
						    },
						    { name: 'Sardar Patel Institute of Technology',
						      location: 'Mumbai, India',
							  degree: 'Bachelor of Engineering',
							  majors: ['Electronics'],
							  dates: '2013-2017',
							  url: 'http://www.spit.ac.in/'
						    }
						   ],
				  onlineCourses: [{ title: 'Frontend-Web Development Nanodegree',
								    school: 'Udacity',
								    date: '2017',
								    url: 'https://www.udacity.com/'
								  }
							     ],

				  display:  function () {
								var i;
								for (i=0;i<education.schools.length;i++) {
								 	var formattedName = HTMLschoolName.replace('%data%',education.schools[i].name).replace('#', education.schools[i].url);
								 	var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
						    		var formattedNameDegree = formattedName + formattedDegree;
						    		var formattedDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);
								 	var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
								 	var formattedMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors);

								 	$('#education').append(HTMLschoolStart);
						    		$('.education-entry:last').append(formattedNameDegree);
						    		$('.education-entry:last').append(formattedDates);
						    		$('.education-entry:last').append(formattedLocation);
						    		$('.education-entry:last').append(formattedMajor);
		    					}
				    			var j;
				    			for (j=0; j<education.onlineCourses.length;j++) {
									var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[j].title);
								    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[j].school);
								    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
								    var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[j].date);
								    var formattedOnlineUrl = HTMLonlineURL.replace('%data%',education.onlineCourses[j].url).replace('#',education.onlineCourses[j].url);

						    		$('#education').append(HTMLonlineClasses);
						    		$('#education').append(HTMLschoolStart);
								    $('.education-entry:last').append(formattedOnlineTitleOnlineSchool);
								    $('.education-entry:last').append(formattedOnlineDates);
								    $('.education-entry:last').append(formattedOnlineUrl);
				    			}
							}
					};
					education.display();

//Where I've lived and worked//

$('#mapDiv').append(googleMap);





