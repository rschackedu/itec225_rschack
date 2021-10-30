function Start(){
    aesEncrypt();
    sha1Encrypt();
    sha256Encrypt();
    sha512Encrypt();
}
function aesEncrypt(){
    let input = document.getElementById("origInput").value;
    let secret = "1337"
    let aesHash = CryptoJS.AES.encrypt(input,secret);
    document.getElementById("aesOut").value = aesHash.toString();
}
function sha1Encrypt(){
    let input = document.getElementById("origInput").value;
    let sha1Hash = CryptoJS.SHA1(input);
    document.getElementById("sha1Out").value = sha1Hash.toString();
}
function sha256Encrypt(){
    let input = document.getElementById("origInput").value;
    let sha256Hash = CryptoJS.SHA256(input);
    document.getElementById("sha256Out").value = sha256Hash.toString();
}
function sha512Encrypt(){
    let input = document.getElementById("origInput").value;
    let sha512Hash = CryptoJS.SHA512(input);
    document.getElementById("sha512Out").value = sha512Hash.toString();
}
function B2D(b) {
    b = document.getElementById("binInput").value.toString()
    let d = 0;
    for (let i = 0; i < b.length; i++) {
        d += Number(b[i])*Math.pow(2, b.length - 1 - i);
    }
    return document.getElementById("decOut").value = d.toString();
}
function D2B(decimal){
    decimal = document.getElementById("decInput").value.toString()
    let binary = "";
    while(decimal>0){
        binary = decimal%2 + binary;
        decimal = Math.floor(decimal/2);
    }
    return document.getElementById("binOut").value = binary.toString();
}