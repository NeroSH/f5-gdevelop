gdjs.GameCode = {};
gdjs.GameCode.GDEngineerObjects1= [];
gdjs.GameCode.GDEngineerObjects2= [];
gdjs.GameCode.GDTileObjects1= [];
gdjs.GameCode.GDTileObjects2= [];
gdjs.GameCode.GDBackGroundObjects1= [];
gdjs.GameCode.GDBackGroundObjects2= [];
gdjs.GameCode.GDPlatform3Objects1= [];
gdjs.GameCode.GDPlatform3Objects2= [];
gdjs.GameCode.GDLineOfDieObjects1= [];
gdjs.GameCode.GDLineOfDieObjects2= [];
gdjs.GameCode.GDHeartObjects1= [];
gdjs.GameCode.GDHeartObjects2= [];
gdjs.GameCode.GDHealthObjects1= [];
gdjs.GameCode.GDHealthObjects2= [];
gdjs.GameCode.GDGoRightObjects1= [];
gdjs.GameCode.GDGoRightObjects2= [];
gdjs.GameCode.GDGoLeftObjects1= [];
gdjs.GameCode.GDGoLeftObjects2= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDNewObject2Objects1= [];
gdjs.GameCode.GDNewObject2Objects2= [];
gdjs.GameCode.GDKormaObjects1= [];
gdjs.GameCode.GDKormaObjects2= [];
gdjs.GameCode.GDCountDetailsObjects1= [];
gdjs.GameCode.GDCountDetailsObjects2= [];
gdjs.GameCode.GDCountObjects1= [];
gdjs.GameCode.GDCountObjects2= [];
gdjs.GameCode.GDSpawnSecretObjects1= [];
gdjs.GameCode.GDSpawnSecretObjects2= [];
gdjs.GameCode.GDSpawnObjects1= [];
gdjs.GameCode.GDSpawnObjects2= [];
gdjs.GameCode.GDFinishHimObjects1= [];
gdjs.GameCode.GDFinishHimObjects2= [];
gdjs.GameCode.GDSecretObjects1= [];
gdjs.GameCode.GDSecretObjects2= [];
gdjs.GameCode.GDPortal2Objects1= [];
gdjs.GameCode.GDPortal2Objects2= [];
gdjs.GameCode.GDPortalObjects1= [];
gdjs.GameCode.GDPortalObjects2= [];
gdjs.GameCode.GDWalkingEnemyObjects1= [];
gdjs.GameCode.GDWalkingEnemyObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDKormaObjects1Objects = Hashtable.newFrom({"Korma": gdjs.GameCode.GDKormaObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLineOfDieObjects1Objects = Hashtable.newFrom({"LineOfDie": gdjs.GameCode.GDLineOfDieObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.GameCode.GDPortalObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.GameCode.GDGoRightObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.GameCode.GDGoLeftObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.GameCode.GDEngineerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPortal2Objects1Objects = Hashtable.newFrom({"Portal2": gdjs.GameCode.GDPortal2Objects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinishHim"), gdjs.GameCode.GDFinishHimObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.GameCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.GameCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.GameCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.GameCode.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Korma"), gdjs.GameCode.GDKormaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.GameCode.GDPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.GameCode.GDPortal2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDKormaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDKormaObjects1[i].setAnimationName("Shine");
}
}{for(var i = 0, len = gdjs.GameCode.GDPortalObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPortalObjects1[i].setAnimationName("SPortal");
}
}{for(var i = 0, len = gdjs.GameCode.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPortal2Objects1[i].setAnimationName("SPortal");
}
}{for(var i = 0, len = gdjs.GameCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHeartObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeartObjects1[i].setAnimationName("spin");
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthObjects1[i].setString("5");
}
}{for(var i = 0, len = gdjs.GameCode.GDFinishHimObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinishHimObjects1[i].hide();
}
}{gdjs.evtTools.camera.setLayerAmbientLightColor(runtimeScene, "GUI", "255;255;255");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEngineerObjects1[k] = gdjs.GameCode.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].setAnimationName("move");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDEngineerObjects1.length !== 0 ? gdjs.GameCode.GDEngineerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEngineerObjects1[k] = gdjs.GameCode.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").canJump() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEngineerObjects1[k] = gdjs.GameCode.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Звук прыжка.mp3", false, 80, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Korma"), gdjs.GameCode.GDKormaObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDKormaObjects1Objects, false, runtimeScene, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Count"), gdjs.GameCode.GDCountObjects1);
/* Reuse gdjs.GameCode.GDKormaObjects1 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDKormaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDKormaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDCountObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCountObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDCountObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCountObjects1[i].setColor("255;0;205");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Подбор детали.mp3", false, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("LineOfDie"), gdjs.GameCode.GDLineOfDieObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLineOfDieObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.GameCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.GameCode.GDSpawnObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].putAround((( gdjs.GameCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnObjects1[0].getPointX("Spawn")), (( gdjs.GameCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnObjects1[0].getPointY("Spawn")), 1, 0);
}
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthObjects1[i].setString(gdjs.GameCode.GDHealthObjects1[i].getString() - ("1"));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Упал.mp3", false, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.GameCode.GDPortalObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPortalObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpawnSecret"), gdjs.GameCode.GDSpawnSecretObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].putAround((( gdjs.GameCode.GDSpawnSecretObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnSecretObjects1[0].getPointX("SpawnSecret")), (( gdjs.GameCode.GDSpawnSecretObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpawnSecretObjects1[0].getPointY("SpawnSecret")), 1, 0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Портал.mp3", false, 60, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEngineerObjects1[k] = gdjs.GameCode.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineerObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariableNumber(gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects1[k] = gdjs.GameCode.GDWalkingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8413804);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.GameCode.GDHealthObjects1);
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthObjects1[i].setString(gdjs.GameCode.GDHealthObjects1[i].getString() - ("1"));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Урон от моба.mp3", false, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEngineerObjects1[k] = gdjs.GameCode.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariableNumber(gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects1[k] = gdjs.GameCode.GDWalkingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineerObjects1 */
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].setAnimationName("dead");
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].returnVariable(gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Смерть моба.mp3", false, 60, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Прыжок от врага.mp3", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.GameCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoRightObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariableNumber(gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects1[k] = gdjs.GameCode.GDWalkingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].addForce(10, 0, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.GameCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGoLeftObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariableNumber(gdjs.GameCode.GDWalkingEnemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects1[k] = gdjs.GameCode.GDWalkingEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].addForce(-(10), 0, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Count"), gdjs.GameCode.GDCountObjects1);
gdjs.copyArray(runtimeScene.getObjects("FinishHim"), gdjs.GameCode.GDFinishHimObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCountObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCountObjects1[i].setColor("6;255;229");
}
}{for(var i = 0, len = gdjs.GameCode.GDFinishHimObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFinishHimObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.GameCode.GDEngineerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.GameCode.GDPortal2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEngineerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPortal2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl2", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Портал.mp3", false, 60, 1);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDEngineerObjects1.length = 0;
gdjs.GameCode.GDEngineerObjects2.length = 0;
gdjs.GameCode.GDTileObjects1.length = 0;
gdjs.GameCode.GDTileObjects2.length = 0;
gdjs.GameCode.GDBackGroundObjects1.length = 0;
gdjs.GameCode.GDBackGroundObjects2.length = 0;
gdjs.GameCode.GDPlatform3Objects1.length = 0;
gdjs.GameCode.GDPlatform3Objects2.length = 0;
gdjs.GameCode.GDLineOfDieObjects1.length = 0;
gdjs.GameCode.GDLineOfDieObjects2.length = 0;
gdjs.GameCode.GDHeartObjects1.length = 0;
gdjs.GameCode.GDHeartObjects2.length = 0;
gdjs.GameCode.GDHealthObjects1.length = 0;
gdjs.GameCode.GDHealthObjects2.length = 0;
gdjs.GameCode.GDGoRightObjects1.length = 0;
gdjs.GameCode.GDGoRightObjects2.length = 0;
gdjs.GameCode.GDGoLeftObjects1.length = 0;
gdjs.GameCode.GDGoLeftObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDNewObject2Objects1.length = 0;
gdjs.GameCode.GDNewObject2Objects2.length = 0;
gdjs.GameCode.GDKormaObjects1.length = 0;
gdjs.GameCode.GDKormaObjects2.length = 0;
gdjs.GameCode.GDCountDetailsObjects1.length = 0;
gdjs.GameCode.GDCountDetailsObjects2.length = 0;
gdjs.GameCode.GDCountObjects1.length = 0;
gdjs.GameCode.GDCountObjects2.length = 0;
gdjs.GameCode.GDSpawnSecretObjects1.length = 0;
gdjs.GameCode.GDSpawnSecretObjects2.length = 0;
gdjs.GameCode.GDSpawnObjects1.length = 0;
gdjs.GameCode.GDSpawnObjects2.length = 0;
gdjs.GameCode.GDFinishHimObjects1.length = 0;
gdjs.GameCode.GDFinishHimObjects2.length = 0;
gdjs.GameCode.GDSecretObjects1.length = 0;
gdjs.GameCode.GDSecretObjects2.length = 0;
gdjs.GameCode.GDPortal2Objects1.length = 0;
gdjs.GameCode.GDPortal2Objects2.length = 0;
gdjs.GameCode.GDPortalObjects1.length = 0;
gdjs.GameCode.GDPortalObjects2.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects1.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
