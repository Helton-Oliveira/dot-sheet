const cam = document.querySelector('#video');

console.log(cam)

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../recognitionModels'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../recognitionModels'),
    faceapi.nets.faceLandmark68Net.loadFromUri('../recognitionModels'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('../recognitionModels')
]).then(start);

async function start() {
    const constraints = { video: true }

    console.log('rodando')

    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints);

        cam.srcObject = stream ;
        cam.onloadedmetadata = async() => {
            cam.play()
            compareFaces(cam)
        }

            
    } catch (error) {
        console.error(error);
    }
}

async function compareFaces(cam) {
    const options = {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch('http://localhost:8080/employe', options);

    const result = await response.json();
    const names = result.map((obj) => obj.name)

    const labeledFaceDescriptors = await labeledTest(names)
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, .6);
    console.log(labeledFaceDescriptors)

    const faceCam = await faceapi
        .detectAllFaces(cam)
        .withFaceLandmarks()
        .withFaceDescriptors() 

        if(!faceCam.length){
            return
        }

        const results = faceCam.map(d => faceMatcher.findBestMatch(d.descriptor))

        results.forEach(async(file) => {
            const res = file.distance 
            console.log(res)
            res > .3?  await createRegister(file.label) : console.log('erro')
        })

    
}


function labeledTest (names) {
    const labels = names
    return Promise.all(
        labels.map(async label => {
            const descriptions = []
                const img = await faceapi.fetchImage(
                    `../../uploads/${label}.jpg`
                ) 
                const singleRes = await faceapi.detectSingleFace(img)
                .withFaceLandmarks()
                .withFaceDescriptor()
                descriptions.push(singleRes.descriptor)
                return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}

async function createRegister(register) {

    const regist = {
        name: register
    }

    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(regist)
    }

    const response = await fetch('http://localhost:8080/register/rec', options);

    const res = await response.json()

    console.log(res)
}