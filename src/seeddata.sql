insert into diy_users (first_name, last_name, email, password, avatar_file) VALUES
('Jason', 'Voorhees','mistermachete@campcrystallake.com','boopboop123','bulb.png'),
('Freddie', 'Kruger','nightmare@elmstreet.com','slashy123','bulb.png'),
('Jack', 'Torrance','caretaker@overlook.com','advocat123','bulb.png'),
('Randal', 'Flagg','captain@trips.com','boopboop123','bulb.png'),
('King Matt', 'Demagogue', 'matty@mattypie.com', 'matt','bulb.png'),
('Stanley', 'Kubrick', 'theshining@shining.com', 'shining','bulb.png');

insert into diy_categories (category_title) VALUES
('Food'),
('Drinks'),
('Crafts'),
('Tech'),
('Clothing');

insert into diy_materials (title, amazon_asin) VALUES
('Elmers Glue','B010DS107K'),
('Index Cards','B010DS00Y4'),
('Popsicle Sticks','B071L59Q7J'),
('Feathers','B06VWKVZH1'),
('String','B005GYJZMY'),
('Murder Weapon,','B014LSF9YI'),
('Planks on planks', 'B00I0FJCGA'),
('White Paint for White People', 'B010I5D54E'),
('AN AXE FOR PEOPLES', 'B004WJGXAQ' ),
('Edgar Allen Poe Booze', 'B01J2K0AXK');

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
('2010-01-02 03:04:56',1,5,'Counselor Cabin','FEXES8LF9T3NR1D.LARGE.jpg',
4,2,3,'Today we will make a charming little log cabin style bungalow out of popsicle sticks. It will require a few ordinary things and can be completed relatively quickly. Then you can relax as the glue dries, by sharpening your machete, or going for a swim in the lake unsupervised.');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(1,1,'popsicle-stick-baby-chick-1-945x630.jpg',
'Roof Frame','Glue three sticks together in a triangle to form the first part of your roof frame. This attic is where mom keeps her sweater.'),
(1,2,'washitapepopsiclesticksledbackside.jpg',
'Door','Glue 5 sticks together. This will make a weak door that you can knock over when you need to menace some campers.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(1,1,1),
(1,3,912);

-- Insert a second project.

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
('2010-01-04 01:01:04',2,5,'Dream Scanner','Antique-Imitation-Dreamcatcher-Gift-checking-Dream-Catcher-Net-With-natural-stone-Feathers-Wall-Hanging-Decoration-Ornament-5.jpg',
6,1,4,'Make a dream catcher, so that your nightmares get all tangled up in this string spider web thing. Then once a week you just take it out to the yard and hose it off.');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(2,1,'popsicle-stick-baby-chick-1-945x630.jpg',
'Make a Circle','First bend the tree branch in to a circle. Dont snap it or goblins will eat your soul.'),
(2,2,'Barn-Owl-Trust-recycled-string-no-box-1.jpg',
'Weave String','This is the hardest part, so just do it with your eyes closed. Weave some things all over the circle. Try to make it pretty'),
(2,3,'71MB3Hk4aYL._SX425_.jpg',
'Use Some Feathers','This is the hardest part, so just do it with your eyes closed. Weave some things all over the circle. Try to make it pretty');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(2,2,10),
(2,4,1);

-- Insert a third project

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,3,5,'Delicious Red Rum','images.jpeg',
2,2,2,'Right before you go crazy in the snow all by yourself and chase your family through a hotel with a fire-axe you might find yourself simply parched. That dry winter air does cause a powerful thirst. Here is a delightful beverage to slake that internal fire, and quench your desire for something red and bloody.');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(3,1,'popsicle-stick-baby-chick-1-945x630.jpg',
'Get a glass','First get a fancy long stemmed cocktail glass. I like a traditional martini glass.'),
(3,2,'Barn-Owl-Trust-recycled-string-no-box-1.jpg',
'Get a shaker','Get a shaker and fill it with custom filtered boiled and clarified ice from the North Pole'),
(3,3,'71MB3Hk4aYL._SX425_.jpg',
'Screw it, drink out of the bottle','Noisily knock everything off the counter and spill it all over, grab the bottle, and take a big ole tug right from it. You dont need a glass. You are the caretaker.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(3,5,237),
(3,6,237);

--Insert Fourth Project:

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,5,5,'Pretty Plank Wall','Awesome-Plank-Wall-Project-Live-Laugh-Rowe.jpg',
3,2, 3, 'Is the inside of your 1 bedroom apartment a little barren and boring?  Do you want to leave something pretty for the next sad sap who lives there?  Why not install your own plank wall!?');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(4,1,'Project-Plank-Wall.gif',
'Get some 1x4 planks','Cut em up all nice and pretty and think about your positioning.'),
(4,2,'Plank-Wall-Project.-Sanding-and-Prepping-the-planks-for-painting.jpg',
'Get them aligned and screwed in','Please be careful with all of those powertools that are required.  If you sever a finger I will not be held liable.'),
(4,3,'Plank-Wall-Project.-Fabulous-White-Plank-Wall.jpg',
'Paint it WHITE!','You made a fabulous plank wall - good job.  You will be able to easily seduce members of the opposite (or same) sex with your crafty ingenuity.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(4,8,1),
(4,7,20);

-- Project number 5:

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,6,5,'Create your own massacre!','stanley-hotel-shining.jpg',
3,2, 3, 'Is your life a little boring?  Why not spice it up with some delusions and murder!?  COME ONE, COME ALL, kiddies, it is time to get down with the sickness!');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(5,1,'the-shining-family.png',
'Draw some inspiration from a cult classic','Watch this 1000 times and it will never be enough.'),
(5,2,'Grady-Twins-From-Shining.gif',
'Find some creepy twins to set the mood','Make sure they are as terrifying as possible.  Throw in some skinless old ladies.'),
(5,3,'HeavenlyFrighteningEyas-size_restricted.gif',
'HERES JOHNNY','Whatever you do, before murdering your family make sure you yell this classic line, HERES JOHNNY.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(5,9,1),
(5,10,20);

-- Project Number 6

insert into diy_projects (creation_date, user_id, publish_status, project_title, 
feature_image_file, time_range, cost_range, category_id,
project_description) VALUES
(current_timestamp,6,5,'Form the Legion of Doom','hqdefault.jpg',
3,2, 3, 'Do you hate Superman?  Do you loathe Batman?  Do you think the Flash is dumb?  Do you just want a life without the superfriends?  Here is a step by step guide to create the LEGION OF DOOOOOOOOOOM.');

insert into diy_steps (project_id, step_order, step_image_file, step_title, step_text)
VALUES
(6,1,'Learntocode-1.jpg',
'Use your laptop, and learn to code','If you can become a coder, you can become a super villian.  You could steal info from Lifelock, train times from Marta and expose poorly secured front end SQL databases!'),
(6,2,'legion_of_doom.png',
'Find some friends interested in world domination!','Plot the demise of the superfriends.  Use your code for evil.  Focus on world domination.  Kick dogs.  Whatever you do, do not help old ladies carrying groceries across the street.'),
(6,3,'LLuthor.png',
'Matthew Marberry','Bald super genius status.'),
(6,4,'Brainiac.png',
'Nathan Reese','A balder superer genius status.'),
(6,5,'Sinestro_Super_Friends.jpg',
'Ian Gornall','A superer genius with a full head of hair to boot.');

insert into diy_materials_bridge (project_id, material_id, quantity) VALUES
(6,9,1),
(6,10,20);

insert into diy_my_projects (user_id, project_id, project_status) VALUES
(1,1,1),
(1,2,1),
(1,3,2),
(1,4,2),
(1,5,3),
(1,6,3);

--- Insert some comments

insert into diy_comments (creation_date, user_id, project_id, comment) VALUES
(current_timestamp, 1, 1, 'Hey nice project.'),
(current_timestamp, 1, 1, 'Hey nice project.'),
(current_timestamp, 1, 1, 'Hey nice project.'),
(current_timestamp, 1, 1, 'Hey nice project.');