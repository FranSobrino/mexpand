mexpand
=========

Inserts a new item among a list of multiple rows

```html
    <div id="container" data-role="mexpand">
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
      <div class="member">A Item with some witdh</div>
    </div>
```

```javascript
$(function(){
   $('[data-role~=mexpand]').mexpand({
    element: "div.member",
    box: "Mexpander: Example text appended on element",  //TODO change by data function
    callback: null
   })
})
```
