/**
 * @param s number of seconds to sleep
 * @returns Promise<void>
 */
export const sleep = (s: number) => new Promise((resolve) => setTimeout(resolve, s * 1000))