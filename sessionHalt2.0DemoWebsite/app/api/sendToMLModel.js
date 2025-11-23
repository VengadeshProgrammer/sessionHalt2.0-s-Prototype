export async function sendToMLModel(fingerprint, accFingerprints) {
  try {
    const response = await fetch("https://sessionhalt2-0-s-ml.onrender.com/replace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fingerprint, accFingerprints })
    });

    const result = await response.json();
    console.log("ML Model Response:", result);
    return result;
  } catch (err) {
    console.error("Error contacting ML Model:", err);
    return { error: "ML server unreachable" };
  }
}
