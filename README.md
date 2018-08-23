# AngularSimpleAnimate
Angular 2+ directive to slide-up and slide-down an element such as vertical menu.

## How to use
1. Import the directive in your application module

<pre><code>import { AnimateDirective } from './animate.directive';</code></pre>

2. Declare in the module declarations
<pre>
<code>@NgModule({
  imports:      [ .. ],
  declarations: [ AppComponent, AnimateDirective ],
  bootstrap:    [ AppComponent ]
})</code>
</pre>

3. Add [simpleAnimate] attribute directive in your component template. e.g.
<pre>
<code>&lt;button [simpleAnimate]="'ease-in-out'" target="target-content"&gt;Slide Toggle&lt;/button&gt;
&lt;div id="target-content"&gt;
  your content here..
&lt;/div&gt;</code>
</pre>
