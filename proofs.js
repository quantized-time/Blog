// Expandable proof blocks
// ─────────────────────────────────────────────
// Usage in HTML:
//
//   <span class="thm" data-proof="my-id">some theorem</span><span class="thm-marker">▸</span>
//
//   <div class="proof" id="proof-my-id">
//     <div class="proof-inner">
//       <div class="proof-content">
//         <div class="proof-label">
//           Proof / Explanation
//           <span class="close" data-close="my-id">close ✕</span>
//         </div>
//         <p>Your explanation here...</p>
//       </div>
//     </div>
//   </div>
//
// That's it! Copy the pattern above for every expandable term.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.thm').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-proof');
      const block = document.getElementById('proof-' + id);
      if (!block) return;
      const isOpen = block.classList.contains('visible');
      block.classList.toggle('visible', !isOpen);
      el.classList.toggle('open', !isOpen);
    });
  });

  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.getAttribute('data-close');
      document.getElementById('proof-' + id)?.classList.remove('visible');
      document.querySelector('[data-proof="' + id + '"]')?.classList.remove('open');
    });
  });
});
