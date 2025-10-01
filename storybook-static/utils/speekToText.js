export const speekToText = () => {
    $(function () {
        let mediaRecorder,
            audioChunks = [],
            audioBlob;
        let audioCtx, analyser, source, dataArray, animationId;
        let timerInterval,
            secondsElapsed = 0;
        const MAX_DURATION = 30;

        const stopBtn = document.getElementById("stopBtn");

        const reRecordBtn = document.getElementById("reRecordBtn");
        const downloadBtn = document.getElementById("downloadBtn");
        const recaller = document.getElementById("recaller");
        const textResult = document.getElementById("textResult");
        const addRecordBtn = document.getElementById("addRecordBtn");
        const canvas = document.getElementById("visualizer");
        const ctx = canvas.getContext("2d");
        const timerDiv = document.getElementById("timer");

        let history = [];
        const BAR_WIDTH = 2; // largeur des barres
        const BAR_SPACING = 2; // espacement
        const SPEED = 4;
        const AMPLIFY = 5; // amplification visuelle

        //init
        function init() {
            viewrecorderOnly();
            startRecording();
        }
        function viewrecorderOnly() {
            recaller.classList.remove("d-none");
            recaller.classList.add("d-flex");
            textResult.classList.remove("d-inline-flex");
            textResult.classList.add("d-none");
            addRecordBtn.classList.remove("d-inline-flex");
            addRecordBtn.classList.add("d-none");
            reRecordBtn.disabled = true;
            downloadBtn.disabled = true;
            stopBtn.disabled = false;
        }

        function viewrecorder() {
            recaller.classList.remove("d-none");
            recaller.classList.add("d-flex");
            addRecordBtn.classList.remove("d-inline-flex");
            addRecordBtn.classList.add("d-none");
            reRecordBtn.disabled = true;
            downloadBtn.disabled = true;
            stopBtn.disabled = false;
        }

        function viewtextResult() {
            reRecordBtn.disabled = false;
            downloadBtn.disabled = false;
            recaller.classList.remove("d-flex");
            recaller.classList.add("d-none");
            textResult.classList.remove("d-none");
            textResult.classList.add("d-inline-flex");
            addRecordBtn.classList.remove("d-none");
            addRecordBtn.classList.add("d-inline-flex");
        }
        // Canvas responsive
        function resizeCanvas() {
            const newWidth = canvas.clientWidth;
            const newHeight = canvas.clientHeight;
            canvas.width = newWidth;
            canvas.height = newHeight;

            const newLength = Math.floor(canvas.width / (BAR_WIDTH + BAR_SPACING));
            history = new Array(newLength).fill(0); // recalcul propre
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener("load", resizeCanvas);
        window.addEventListener("resize", resizeCanvas);

        function drawBars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerY = canvas.height / 2;
            for (let i = 0; i < history.length; i++) {
                const h = history[i];
                ctx.fillStyle = "#000000";
                ctx.fillRect(i * (BAR_WIDTH + BAR_SPACING), centerY - h / 2, BAR_WIDTH, h);
            }
        }

        function updateTimer() {
            const min = Math.floor(secondsElapsed / 60);
            const sec = secondsElapsed % 60;
            timerDiv.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
        }

        // Convertir AudioBuffer en WAV
        function audioBufferToWav(buffer) {
            const numChannels = buffer.numberOfChannels;
            const sampleRate = buffer.sampleRate;
            const length = buffer.length * numChannels * 2 + 44;
            const arrayBuffer = new ArrayBuffer(length);
            const view = new DataView(arrayBuffer);
            let offset = 0;
            function writeString(str) {
                for (let i = 0; i < str.length; i++) view.setUint8(offset++, str.charCodeAt(i));
            }
            function setUint16(val) {
                view.setUint16(offset, val, true);
                offset += 2;
            }
            function setUint32(val) {
                view.setUint32(offset, val, true);
                offset += 4;
            }
            writeString("RIFF");
            setUint32(length - 8);
            writeString("WAVE");
            writeString("fmt ");
            setUint32(16);
            setUint16(1);
            setUint16(numChannels);
            setUint32(sampleRate);
            setUint32(sampleRate * numChannels * 2);
            setUint16(numChannels * 2);
            setUint16(16);
            writeString("data");
            setUint32(buffer.length * numChannels * 2);
            for (let i = 0; i < buffer.length; i++) {
                for (let ch = 0; ch < numChannels; ch++) {
                    let sample = buffer.getChannelData(ch)[i];
                    sample = Math.max(-1, Math.min(1, sample));
                    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
                    offset += 2;
                }
            }
            return arrayBuffer;
        }

        // Convertir blob webm en WAV
        function blobToWav(chunks) {
            const buffer = new Blob(chunks, { type: "audio/webm" });
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const arrayBuffer = reader.result;
                    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    audioCtx.decodeAudioData(arrayBuffer, (audioBuffer) => {
                        const wavBuffer = audioBufferToWav(audioBuffer);
                        const wavBlob = new Blob([wavBuffer], { type: "audio/wav" });
                        resolve(wavBlob);
                    });
                };
                reader.readAsArrayBuffer(buffer);
            });
        }

        // Démarrer enregistrement
        async function startRecording() {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            resizeCanvas();
            secondsElapsed = 0;
            updateTimer();
            mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
            mediaRecorder.onstop = async () => {
                audioBlob = await blobToWav(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                // player.src = audioUrl;

                //text resutl
                textResult.value += "\n \nDuis enim mauris, finibus eget orci bibendum, sodales semper velit. Cras pulvinar neque vitae velit gravida, pharetra ultrices libero lobortis.";
                textResult.scrollTop = textResult.scrollHeight;
                viewtextResult();

                clearInterval(timerInterval);
                secondsElapsed = 0;
                updateTimer();
            };

            mediaRecorder.start();

            timerInterval = setInterval(() => {
                secondsElapsed++;
                updateTimer();
                if (secondsElapsed >= MAX_DURATION && mediaRecorder.state === "recording") mediaRecorder.stop();
            }, 1000);

            // 🎯 AudioContext & Analyser
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === "suspended") {
                await audioCtx.resume();
            }

            analyser = audioCtx.createAnalyser();
            source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.fftSize = 256;
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            // stop toute animation précédente
            if (animationId) cancelAnimationFrame(animationId);

            let frame = 0;
            function draw() {
                animationId = requestAnimationFrame(draw);
                analyser.getByteFrequencyData(dataArray);
                if (frame % SPEED === 0) {
                    const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
                    const barHeight = (avg / 255) * canvas.height * AMPLIFY;
                    history.shift();
                    history.push(barHeight);
                }
                frame++;
                drawBars();
            }
            draw();
        }

        // Bouton arrêter
        stopBtn.addEventListener("click", () => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
                mediaRecorder.stop();
                stopBtn.disabled = true;
                cancelAnimationFrame(animationId);
                if (audioCtx) audioCtx.close();
                clearInterval(timerInterval);
                secondsElapsed = 0;
                updateTimer();
            }
        });

        addRecordBtn.addEventListener("click", () => {
            viewrecorder();

            startRecording();
        });

        // Réenregistrer
        reRecordBtn.addEventListener("click", () => {
            viewrecorderOnly();
            textResult.value = "Duis enim mauris, finibus eget orci bibendum, sodales semper velit. Cras pulvinar neque vitae velit gravida, pharetra ultrices libero lobortis.";
            startRecording();
        });

        // Télécharger
        downloadBtn.addEventListener("click", () => {
            if (!audioBlob) return;
            const url = URL.createObjectURL(audioBlob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "enregistrement.wav";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        // auto-start

        init();
    });
};
