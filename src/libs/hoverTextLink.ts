const hoverTextLink = () => {
  const links = document.querySelectorAll<HTMLElement>('.ts-text-link');
  const delay = 50;
  links.forEach(link => {
    // 一文字ずつ分割して複製し、spanタグで囲む
    const text = link.textContent;
    const splitText = text?.split('');
    // 空文字を除外
    const filteredText = splitText?.filter(char => char !== ' ');

    const wrappedText = filteredText?.map((char, i) => {
      return `<span style="transition-delay:${i * delay}ms;">${char}</span>`;
    });

    // オリジナルは残して、spanタグで囲んだテキストを挿入
    link.innerHTML = `<span class="ts-text-link__original">${text}</span>`;
    link.innerHTML += `<span class="ts-text-link__clone" aria-hidden="true">${wrappedText?.join('')}</span>`;
    link.innerHTML += `<span class="ts-text-link__clone" aria-hidden="true">${wrappedText?.join('')}</span>`;
  });
};

export default hoverTextLink;
