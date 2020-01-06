var PointerLocked = false;
var GameLoaded = false;

function EnableCursorLock()
{
    if(PointerLocked || !GameLoaded)
        return;

    PointerLocked = true;
    var UnityElement = GetUnityElement();
    UnityElement.requestPointerLock = UnityElement.requestPointerLock || UnityElement.mozRequestPointerLock || UnityElement.webkitRequestPointerLock;
    UnityElement.requestPointerLock();
    UnityInstance.SendMessage('System', 'LockCursor');
}

function CursorLockChangedEvent()
{
    if(PointerLocked)
        PointerLocked = false;
    else
        UnityInstance.SendMessage('System', 'FreeCursor');
}

function GetUnityElement()
{
    return document.getElementById("unityContainer");
}

function AlertGameLoaded()
{
    GameLoaded = true;
}

document.addEventListener('pointerlockchange', CursorLockChangedEvent, false);
document.addEventListener('mozpointerlockchange', CursorLockChangedEvent, false);
document.addEventListener('webkitpointerlockchange', CursorLockChangedEvent, false);
