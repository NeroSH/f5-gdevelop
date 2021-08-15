gdjs.Lvl2Code = {};
gdjs.Lvl2Code.GDEngineerObjects1= [];
gdjs.Lvl2Code.GDEngineerObjects2= [];
gdjs.Lvl2Code.GDTileObjects1= [];
gdjs.Lvl2Code.GDTileObjects2= [];
gdjs.Lvl2Code.GDBackGroundObjects1= [];
gdjs.Lvl2Code.GDBackGroundObjects2= [];
gdjs.Lvl2Code.GDPlatform3Objects1= [];
gdjs.Lvl2Code.GDPlatform3Objects2= [];
gdjs.Lvl2Code.GDLineOfDieObjects1= [];
gdjs.Lvl2Code.GDLineOfDieObjects2= [];
gdjs.Lvl2Code.GDHeartObjects1= [];
gdjs.Lvl2Code.GDHeartObjects2= [];
gdjs.Lvl2Code.GDHealthObjects1= [];
gdjs.Lvl2Code.GDHealthObjects2= [];
gdjs.Lvl2Code.GDGoRightObjects1= [];
gdjs.Lvl2Code.GDGoRightObjects2= [];
gdjs.Lvl2Code.GDGoLeftObjects1= [];
gdjs.Lvl2Code.GDGoLeftObjects2= [];
gdjs.Lvl2Code.GDBackGObjects1= [];
gdjs.Lvl2Code.GDBackGObjects2= [];
gdjs.Lvl2Code.GDNewObjectObjects1= [];
gdjs.Lvl2Code.GDNewObjectObjects2= [];
gdjs.Lvl2Code.GDBossObjects1= [];
gdjs.Lvl2Code.GDBossObjects2= [];
gdjs.Lvl2Code.GDTimerObjects1= [];
gdjs.Lvl2Code.GDTimerObjects2= [];
gdjs.Lvl2Code.GDEndObjects1= [];
gdjs.Lvl2Code.GDEndObjects2= [];

gdjs.Lvl2Code.conditionTrue_0 = {val:false};
gdjs.Lvl2Code.condition0IsTrue_0 = {val:false};
gdjs.Lvl2Code.condition1IsTrue_0 = {val:false};
gdjs.Lvl2Code.condition2IsTrue_0 = {val:false};
gdjs.Lvl2Code.conditionTrue_1 = {val:false};
gdjs.Lvl2Code.condition0IsTrue_1 = {val:false};
gdjs.Lvl2Code.condition1IsTrue_1 = {val:false};
gdjs.Lvl2Code.condition2IsTrue_1 = {val:false};


gdjs.Lvl2Code.mapOfGDgdjs_46Lvl2Code_46GDEngineerObjects1Objects = Hashtable.newFrom({"Engineer": gdjs.Lvl2Code.GDEngineerObjects1});gdjs.Lvl2Code.mapOfGDgdjs_46Lvl2Code_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.Lvl2Code.GDBossObjects1});gdjs.Lvl2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
gdjs.Lvl2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.Lvl2Code.GDBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Lvl2Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Lvl2Code.GDHeartObjects1);
{for(var i = 0, len = gdjs.Lvl2Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDHeartObjects1[i].setAnimationName("spin");
}
}{for(var i = 0, len = gdjs.Lvl2Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDHealthObjects1[i].setString("5");
}
}{for(var i = 0, len = gdjs.Lvl2Code.GDBossObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDBossObjects1[i].setAnimationName("move");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "boss_music.mp3", true, 10, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDEngineerObjects1[k] = gdjs.Lvl2Code.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDEngineerObjects1.length = k;}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].setAnimationName("move");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Lvl2Code.GDEngineerObjects1.length !== 0 ? gdjs.Lvl2Code.GDEngineerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDEngineerObjects1[k] = gdjs.Lvl2Code.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDEngineerObjects1.length = k;}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
gdjs.Lvl2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
gdjs.Lvl2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
gdjs.Lvl2Code.condition1IsTrue_0.val = false;
{
gdjs.Lvl2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Lvl2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").canJump() ) {
        gdjs.Lvl2Code.condition1IsTrue_0.val = true;
        gdjs.Lvl2Code.GDEngineerObjects1[k] = gdjs.Lvl2Code.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDEngineerObjects1.length = k;}}
if (gdjs.Lvl2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Звук прыжка.mp3", false, 80, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.Lvl2Code.GDBossObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDBossObjects1[i].getVariableNumber(gdjs.Lvl2Code.GDBossObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDBossObjects1[k] = gdjs.Lvl2Code.GDBossObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDBossObjects1.length = k;}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDBossObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);
{for(var i = 0, len = gdjs.Lvl2Code.GDBossObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDBossObjects1[i].addForceTowardPosition((( gdjs.Lvl2Code.GDEngineerObjects1.length === 0 ) ? 0 :gdjs.Lvl2Code.GDEngineerObjects1[0].getPointX("Engineer")), (( gdjs.Lvl2Code.GDEngineerObjects1.length === 0 ) ? 0 :gdjs.Lvl2Code.GDEngineerObjects1[0].getPointY("Engineer")), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.Lvl2Code.GDBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
gdjs.Lvl2Code.condition1IsTrue_0.val = false;
{
gdjs.Lvl2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lvl2Code.mapOfGDgdjs_46Lvl2Code_46GDEngineerObjects1Objects, gdjs.Lvl2Code.mapOfGDgdjs_46Lvl2Code_46GDBossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Lvl2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDBossObjects1[i].getVariableNumber(gdjs.Lvl2Code.GDBossObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Lvl2Code.condition1IsTrue_0.val = true;
        gdjs.Lvl2Code.GDBossObjects1[k] = gdjs.Lvl2Code.GDBossObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDBossObjects1.length = k;}}
if (gdjs.Lvl2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDEngineerObjects1 */
{for(var i = 0, len = gdjs.Lvl2Code.GDEngineerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDEngineerObjects1[i].returnVariable(gdjs.Lvl2Code.GDEngineerObjects1[i].getVariables().getFromIndex(0)).sub(5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engineer"), gdjs.Lvl2Code.GDEngineerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDEngineerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDEngineerObjects1[i].getVariableNumber(gdjs.Lvl2Code.GDEngineerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDEngineerObjects1[k] = gdjs.Lvl2Code.GDEngineerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDEngineerObjects1.length = k;}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl2", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Lvl2Code.GDTimerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
gdjs.Lvl2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDTimerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDTimerObjects1[i].getString() == "0" ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDTimerObjects1[k] = gdjs.Lvl2Code.GDTimerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDTimerObjects1.length = k;}if ( gdjs.Lvl2Code.condition0IsTrue_0.val ) {
{
{gdjs.Lvl2Code.conditionTrue_1 = gdjs.Lvl2Code.condition1IsTrue_0;
gdjs.Lvl2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8930068);
}
}}
if (gdjs.Lvl2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.Lvl2Code.GDBossObjects1);
{for(var i = 0, len = gdjs.Lvl2Code.GDBossObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDBossObjects1[i].setAnimationName("death");
}
}{for(var i = 0, len = gdjs.Lvl2Code.GDBossObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDBossObjects1[i].returnVariable(gdjs.Lvl2Code.GDBossObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Смерть моба.mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.Lvl2Code.GDBossObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDBossObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Lvl2Code.GDTimerObjects1);

gdjs.Lvl2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lvl2Code.GDTimerObjects1.length;i<l;++i) {
    if ( gdjs.Lvl2Code.GDTimerObjects1[i].getString() != "0" ) {
        gdjs.Lvl2Code.condition0IsTrue_0.val = true;
        gdjs.Lvl2Code.GDTimerObjects1[k] = gdjs.Lvl2Code.GDTimerObjects1[i];
        ++k;
    }
}
gdjs.Lvl2Code.GDTimerObjects1.length = k;}if (gdjs.Lvl2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lvl2Code.GDTimerObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(30 - Math.floor(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)));
}{for(var i = 0, len = gdjs.Lvl2Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Lvl2Code.GDTimerObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.Lvl2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl2Code.GDEngineerObjects1.length = 0;
gdjs.Lvl2Code.GDEngineerObjects2.length = 0;
gdjs.Lvl2Code.GDTileObjects1.length = 0;
gdjs.Lvl2Code.GDTileObjects2.length = 0;
gdjs.Lvl2Code.GDBackGroundObjects1.length = 0;
gdjs.Lvl2Code.GDBackGroundObjects2.length = 0;
gdjs.Lvl2Code.GDPlatform3Objects1.length = 0;
gdjs.Lvl2Code.GDPlatform3Objects2.length = 0;
gdjs.Lvl2Code.GDLineOfDieObjects1.length = 0;
gdjs.Lvl2Code.GDLineOfDieObjects2.length = 0;
gdjs.Lvl2Code.GDHeartObjects1.length = 0;
gdjs.Lvl2Code.GDHeartObjects2.length = 0;
gdjs.Lvl2Code.GDHealthObjects1.length = 0;
gdjs.Lvl2Code.GDHealthObjects2.length = 0;
gdjs.Lvl2Code.GDGoRightObjects1.length = 0;
gdjs.Lvl2Code.GDGoRightObjects2.length = 0;
gdjs.Lvl2Code.GDGoLeftObjects1.length = 0;
gdjs.Lvl2Code.GDGoLeftObjects2.length = 0;
gdjs.Lvl2Code.GDBackGObjects1.length = 0;
gdjs.Lvl2Code.GDBackGObjects2.length = 0;
gdjs.Lvl2Code.GDNewObjectObjects1.length = 0;
gdjs.Lvl2Code.GDNewObjectObjects2.length = 0;
gdjs.Lvl2Code.GDBossObjects1.length = 0;
gdjs.Lvl2Code.GDBossObjects2.length = 0;
gdjs.Lvl2Code.GDTimerObjects1.length = 0;
gdjs.Lvl2Code.GDTimerObjects2.length = 0;
gdjs.Lvl2Code.GDEndObjects1.length = 0;
gdjs.Lvl2Code.GDEndObjects2.length = 0;

gdjs.Lvl2Code.eventsList0(runtimeScene);
return;

}

gdjs['Lvl2Code'] = gdjs.Lvl2Code;
