// Usage: a7.convert(document.getElementById('fileUpload').files[0]);
//<input type='file' id='fileUpload' /> 

var a7 = (function () {

    //Using Promise
    //blob => FIle
    //onlycompress => bool - true or false
    async function Convert(blob, onlycompress) {
        

        return new Promise((res, rej) => {
            try {
                var formData = new FormData();
                formData.append('tofmt', 'mp4'); //change format to be changed.
                formData.append('file', blob);
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            var type = request.getResponseHeader("Content-Type");
                            var disposition = request.getResponseHeader("Content-Disposition");
                            var fname = (getFileName(disposition) || 'Temp') + '.' + getMimes(type);
                            fname = fname.split('.')[0] + '' + a7utils.randstr(4) + '.' + fname.split('.')[1];
                            //saveData(this.response, fname, type, )
                            var file = new File([this.response], fname, { type: type, lastModified: Date.now() });
                            //rendersize(file).then(res);
                            res(file);
                        } else {
                            rej(this);
                        }
                    } 
                };
                if (onlycompress) {
                    //request.open('POST', 'http://localhost:54339/api/File/Compress');
                    request.open('POST', 'https://video-converter.immanuel.co/api/File/Compress');
                }
                else {
                    //request.open('POST', 'http://localhost:54339/api/File/ConverterAndCompress');
                    request.open('POST', 'https://video-converter.immanuel.co/api/File/ConverterAndCompress');
                }

                request.onerror = function (err, ev1, ev2, ev3) {
                    console.log("Errorooo", err);
                }

                request.responseType = 'arraybuffer';
                request.send(formData);
            }
            catch (ex) {
                rej(ex);
            }
        });
    }

    //Utilitites (Use if needed)

    var saveData = (function () {
        //var a = document.createElement("a");
        //document.body.appendChild(a);
        //a.style = "display: none";
        return function (data, fileName, filetype) {
            var blob = new Blob([data], { type: filetype }),
                url = window.URL.createObjectURL(blob);
            //a.href = url;
            //a.download = fileName;
            //a.click();
            //setTimeout(function () { window.URL.revokeObjectURL(url); }, 1000);
        };
    }());

    var getMimes = function (type) {
        if (type === "video/x-flv") {
            return "flv";
        }
        else if (type === "video/mp4") {
            return "mp4";
        }
        else if (type === "video/avi") {
            return "avi";
        }
        else if (type === "video/x-ms-wmv") {
            return "wmv";
        }
        else if (type === "video/mpeg") {
            return "mpg";
        }
        else if (type === "video/quicktime") {
            return "mov";
        }
        else if (type === "video/x-m4v") {
            return "m4v";
        }
        else if (type === "video/x-matroska") {
            return "mkv";
        }
        else if (type === "video/webm") {
            return "webm";
        }
    }

    var getFileName = function (disposition) {
        var filename = undefined;
        if (disposition && disposition.indexOf('attachment') !== -1) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
            }
        }

        if (filename && disposition && disposition.indexOf('inline') !== -1) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
            }
        }

        return filename;
    }
    return {
        convert: Convert
    }
})();