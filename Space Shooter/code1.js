gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDPlayerObjects1= [];
gdjs.New_32scene2Code.GDPlayerObjects2= [];
gdjs.New_32scene2Code.GDLaserObjects1= [];
gdjs.New_32scene2Code.GDLaserObjects2= [];
gdjs.New_32scene2Code.GDBackground2Objects1= [];
gdjs.New_32scene2Code.GDBackground2Objects2= [];
gdjs.New_32scene2Code.GDBackgroundObjects1= [];
gdjs.New_32scene2Code.GDBackgroundObjects2= [];
gdjs.New_32scene2Code.GDEnemy1Objects1= [];
gdjs.New_32scene2Code.GDEnemy1Objects2= [];
gdjs.New_32scene2Code.GDEnemy2Objects1= [];
gdjs.New_32scene2Code.GDEnemy2Objects2= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1= [];
gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects2= [];
gdjs.New_32scene2Code.GDMarsObjects1= [];
gdjs.New_32scene2Code.GDMarsObjects2= [];
gdjs.New_32scene2Code.GDFinalObjects1= [];
gdjs.New_32scene2Code.GDFinalObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene2Code.conditionTrue_1 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_1 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.New_32scene2Code.GDLaserObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDEnemy1Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDEnemy2Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDMediumBrownMeteor2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.New_32scene2Code.GDEnemy1Objects1, "Enemy2": gdjs.New_32scene2Code.GDEnemy2Objects1, "MediumBrownMeteor2": gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.New_32scene2Code.GDLaserObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene2Code.GDPlayerObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDEnemy1Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDEnemy2Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDMediumBrownMeteor2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.New_32scene2Code.GDEnemy1Objects1, "Enemy2": gdjs.New_32scene2Code.GDEnemy2Objects1, "MediumBrownMeteor2": gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32scene2Code.GDPlayerObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDMarsObjects1Objects = Hashtable.newFrom({"Mars": gdjs.New_32scene2Code.GDMarsObjects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "3.mp3", true, 80, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.New_32scene2Code.GDBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.New_32scene2Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.New_32scene2Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Final"), gdjs.New_32scene2Code.GDFinalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mars"), gdjs.New_32scene2Code.GDMarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor2"), gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBackground2Objects1[i].setYOffset(gdjs.New_32scene2Code.GDBackground2Objects1[i].getYOffset() + (-(40) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy1Objects1[i].addPolarForce(90, 400, 0);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy2Objects1[i].addPolarForce(90, 400, 0);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i].addPolarForce(90, 400, 0);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDMarsObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDMarsObjects1[i].addPolarForce(90, 400, 0);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDFinalObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDFinalObjects1[i].hide();
}
}}

}


{



}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].addPolarForce(270, 400, 0);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].addPolarForce(180, 400, 0);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].addPolarForce(0, 400, 0);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.New_32scene2Code.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.New_32scene2Code.GDPlayerObjects1[i].getPointX("")) + (gdjs.New_32scene2Code.GDPlayerObjects1[i].getWidth()) / 4, (gdjs.New_32scene2Code.GDPlayerObjects1[i].getPointY("")) - 50, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLaserObjects1Objects, 270, 600, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.New_32scene2Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.New_32scene2Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.New_32scene2Code.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor2"), gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDEnemy1Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDEnemy2Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDMediumBrownMeteor2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDLaserObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDEnemy1Objects1 */
/* Reuse gdjs.New_32scene2Code.GDEnemy2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDLaserObjects1 */
/* Reuse gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDLaserObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy1Objects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy2Objects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.New_32scene2Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.New_32scene2Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor2"), gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDEnemy1Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDEnemy1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDEnemy1Objects1[k] = gdjs.New_32scene2Code.GDEnemy1Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDEnemy1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDEnemy2Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDEnemy2Objects1[k] = gdjs.New_32scene2Code.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDEnemy2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[k] = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDEnemy1Objects1 */
/* Reuse gdjs.New_32scene2Code.GDEnemy2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.New_32scene2Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.New_32scene2Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor2"), gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDPlayerObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDEnemy1Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDEnemy2Objects1ObjectsGDgdjs_46New_9532scene2Code_46GDMediumBrownMeteor2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDEnemy1Objects1 */
/* Reuse gdjs.New_32scene2Code.GDEnemy2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1 */
{runtimeScene.getVariables().get("IsDamaged").setNumber(40);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("IsDamaged")) >= 1;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDPlayerObjects1[i].getBehavior("Health").Hit(50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getVariables().get("IsDamaged").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDPlayerObjects1[k] = gdjs.New_32scene2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDPlayerObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mars"), gdjs.New_32scene2Code.GDMarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32scene2Code.GDPlayerObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDPlayerObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDMarsObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8275180);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 0;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Final"), gdjs.New_32scene2Code.GDFinalObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDFinalObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDFinalObjects1[i].hide(false);
}
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene2Code.GDLaserObjects1.length = 0;
gdjs.New_32scene2Code.GDLaserObjects2.length = 0;
gdjs.New_32scene2Code.GDBackground2Objects1.length = 0;
gdjs.New_32scene2Code.GDBackground2Objects2.length = 0;
gdjs.New_32scene2Code.GDBackgroundObjects1.length = 0;
gdjs.New_32scene2Code.GDBackgroundObjects2.length = 0;
gdjs.New_32scene2Code.GDEnemy1Objects1.length = 0;
gdjs.New_32scene2Code.GDEnemy1Objects2.length = 0;
gdjs.New_32scene2Code.GDEnemy2Objects1.length = 0;
gdjs.New_32scene2Code.GDEnemy2Objects2.length = 0;
gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects1.length = 0;
gdjs.New_32scene2Code.GDMediumBrownMeteor2Objects2.length = 0;
gdjs.New_32scene2Code.GDMarsObjects1.length = 0;
gdjs.New_32scene2Code.GDMarsObjects2.length = 0;
gdjs.New_32scene2Code.GDFinalObjects1.length = 0;
gdjs.New_32scene2Code.GDFinalObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
