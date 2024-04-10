// import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// z needs to be imported directly from this file instead of through the barrel file because it is a namedspace export
//update: importing from this file destroys fast-refresh considerably increasing development time

export { zodResolver }
