
class OpenService {

  static async getLinkMetaData(url: string) {
    const res = await fetch(`https://web-scrapper-coral.vercel.app/api/read_web_meta_data?url=${url}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
}

export { OpenService };
