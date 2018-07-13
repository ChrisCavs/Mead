export const createClap = clap => {
  return $.ajax({
    method: 'POST',
    url: '/api/claps',
    data: { clap }
  })
}