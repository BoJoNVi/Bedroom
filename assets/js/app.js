//------------------Scene & Camera------------------
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


//------------------Drawables------------------
//House Structure
floor = new THREE.Mesh(new THREE.BoxBufferGeometry(10, 1, 10), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
floor.rotation.y -= Math.PI / 2;
floor.position.y = -0.8;
floor.receiveShadow = true;
scene.add(floor);

frontWall = new THREE.Mesh(new THREE.BoxBufferGeometry(10, 5, 1), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
frontWall.position.z = -4.5;
frontWall.receiveShadow = true;
frontWall.castShadow = true;
scene.add(frontWall);

backWall = new THREE.Mesh(new THREE.BoxBufferGeometry(10, 5, 1), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
backWall.position.z = 4.5;
backWall.receiveShadow = true;
backWall.castShadow = true;
scene.add(backWall);

rightWall = new THREE.Mesh(new THREE.BoxBufferGeometry(4, 3.5, 1), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
rightWall.position.set(4.5, 1.5, 0);
rightWall.rotation.y -= Math.PI / 2;
rightWall.receiveShadow = true;
rightWall.castShadow = true;
scene.add(rightWall);

rightWallTop = new THREE.Mesh(new THREE.BoxBufferGeometry(10, 1, 1), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
rightWallTop.position.set(4.5, 3, 0);
rightWallTop.rotation.y -= Math.PI / 2;
rightWallTop.receiveShadow = true;
rightWallTop.castShadow = true;
scene.add(rightWallTop);

leftWall = new THREE.Mesh(new THREE.BoxBufferGeometry(10, 3.5, 1), new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/wood.jpg' ) } ));
leftWall.position.set(-4.5, 1.5, 0);
leftWall.rotation.y -= Math.PI / 2;
leftWall.receiveShadow = true;
leftWall.castShadow = true;
scene.add(leftWall);

roof = new THREE.Mesh(new THREE.BoxBufferGeometry(12, 1, 12), new THREE.MeshPhongMaterial({color:0xffffff}));
roof.position.y = 3.5;
roof.rotation.y -= Math.PI / 2;
roof.receiveShadow = true;
roof.castShadow = true;
scene.add(roof);

//House Interior
bed = new THREE.Mesh(new THREE.BoxBufferGeometry(4, 1, 2), new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/futon.jpg' ) } ));
bed.position.x = 2;
bed.receiveShadow = true;
scene.add(bed);

firePlace = new THREE.Mesh(new THREE.BoxBufferGeometry(3, 1.5, 0.5), new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/fire.jpg' ) } ));
firePlace.position.set(0, 0.4, 4.2)
firePlace.receiveShadow = true;
scene.add(firePlace);

dresser = new THREE.Mesh(new THREE.BoxBufferGeometry(4, 2, 1), new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/dresser.jpeg' ) } ));
dresser.position.z = -4;
dresser.position.y = 0.7;
dresser.receiveShadow = true;
scene.add(dresser);

door = new THREE.Mesh(new THREE.BoxBufferGeometry(2, 3.5, 0.1), new THREE.MeshStandardMaterial( { map: new THREE.TextureLoader().load( 'assets/textures/door.jpg' ) } ));
door.position.set(-4, 1, -2.8);
door.rotation.y -= Math.PI / 2;
door.receiveShadow = true;
scene.add(door);

//House Environment
land = new THREE.Mesh(new THREE.BoxBufferGeometry(15, 2, 15), new THREE.MeshStandardMaterial( {color : 0xC4AC3C} ));
land.position.y = -3;
land.receiveShadow = true;
scene.add(land);

sea = new THREE.Mesh(new THREE.BoxBufferGeometry(1000, 30, 1000), new THREE.MeshPhongMaterial( {map: new THREE.TextureLoader().load( 'assets/textures/sea.jpg' ), opacity: 0.3, transparent: true} ));
sea.position.y = -18;
sea.receiveShadow = true;
scene.add(sea);


//------------------Lightings------------------
var directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1 );
directionalLight.position.set( 30, 10, 15 );
directionalLight.castShadow = true;
scene.add( directionalLight );
ambientLight = new THREE.AmbientLight(0xFFCF70, 0.8);
scene.add(ambientLight);
var spotLight = new THREE.SpotLight( 0xFFC146, 2);
spotLight.position.set( 30, 10, 20 );
spotLight.castShadow = true;
scene.add( spotLight );
var spotLight = new THREE.SpotLight( 0xEC400D, 0.5);
spotLight.position.set( 0, 0.4, 4.2 );
spotLight.target.position.set( 0, 0, 0 );
spotLight.castShadow = true;
scene.add( spotLight.target );
scene.add( spotLight );


//------------------Renderer------------------
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;


//------------------Functions------------------
controls = new THREE.OrbitControls (camera, renderer.domElement);
function animate() {
    controls.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();