import './style.css'
import { setupCounter } from './counter.ts'
import ghpages from 'gh-pages'

ghpages.publish('dist', function(err) { console.log(err)});


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
