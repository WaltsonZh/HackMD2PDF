export const dynamic = 'force-dynamic'

export const GET = async (_request: Request, { params }: { params: { hackMDID: string } }) => {
  try {
    const { hackMDID } = params
    const headers = {
      Authorization: 'Bearer ' + process.env.HACKMDAPI,
    }

    const res = await fetch(`https://api.hackmd.io/v1/notes/${hackMDID?.slice(0, -3)}`, { headers })
    if (!res.ok) {
      return res
    }

    const data = await res.json()

    return new Response(data.content)
  } catch (err) {
    if (err instanceof Error) {
      return new Response(err.message, { statusText: err.name })
    } else {
      return new Response('Internal Server Error', { status: 500 })
    }
  }
}
