function e(){return{id:`grid-go`,name:`grid.go`,fullName:`grid.go`,path:`pkg/life`,shortPath:`pkg/life/grid.go`,iconType:`go`,statusLetter:`M`,statusColor:`status-yellow`,additions:`+3`,deletions:`-1`,isUnifiedDiff:!0,diffLines:[{oldNum:1,newNum:1,oldText:`package life`,newText:`package life`,type:`context`},{oldNum:2,newNum:2,oldText:``,newText:``,type:`context`},{oldNum:3,newNum:3,oldText:`// Grid represents a 2D cellular automaton universe.`,newText:`// Grid represents a 2D cellular automaton universe.`,type:`context`},{oldNum:4,newNum:4,oldText:`type Grid struct {`,newText:`type Grid struct {`,type:`context`},{oldNum:5,newNum:5,oldText:`	width, height int`,newText:`	width, height int`,type:`context`},{oldNum:6,newNum:6,oldText:`	cells         [][]bool`,newText:`	cells         [][]bool`,type:`context`},{oldNum:7,newNum:7,oldText:`}`,newText:`}`,type:`context`},{isFold:!0,foldId:`grid-fold-1`,foldText:`+12 more lines`,lines:[{oldNum:8,newNum:8,oldText:``,newText:``,type:`context`},{oldNum:9,newNum:9,oldText:`// NewGrid initializes an empty grid with given dimensions.`,newText:`// NewGrid initializes an empty grid with given dimensions.`,type:`context`},{oldNum:10,newNum:10,oldText:`func NewGrid(width, height int) *Grid {`,newText:`func NewGrid(width, height int) *Grid {`,type:`context`},{oldNum:11,newNum:11,oldText:`	cells := make([][]bool, height)`,newText:`	cells := make([][]bool, height)`,type:`context`},{oldNum:12,newNum:12,oldText:`	for i := range cells {`,newText:`	for i := range cells {`,type:`context`},{oldNum:13,newNum:13,oldText:`		cells[i] = make([]bool, width)`,newText:`		cells[i] = make([]bool, width)`,type:`context`},{oldNum:14,newNum:14,oldText:`	}`,newText:`	}`,type:`context`},{oldNum:15,newNum:15,oldText:`	return &Grid{width: width, height: height, cells: cells}`,newText:`	return &Grid{width: width, height: height, cells: cells}`,type:`context`},{oldNum:16,newNum:16,oldText:`}`,newText:`}`,type:`context`},{oldNum:17,newNum:17,oldText:``,newText:``,type:`context`},{oldNum:18,newNum:18,oldText:`// Set updates cell state at (x, y).`,newText:`// Set updates cell state at (x, y).`,type:`context`},{oldNum:19,newNum:19,oldText:`func (g *Grid) Set(x, y int, alive bool) { g.cells[y][x] = alive }`,newText:`func (g *Grid) Set(x, y int, alive bool) { g.cells[y][x] = alive }`,type:`context`}]},{oldNum:20,newNum:20,oldText:`// CountNeighbors returns live neighbors for cell (x, y).`,newText:`// CountNeighbors returns live neighbors for cell (x, y).`,type:`context`},{oldNum:21,newNum:21,oldText:`func (g *Grid) CountNeighbors(x, y int) int {`,newText:`func (g *Grid) CountNeighbors(x, y int) int {`,type:`context`},{oldNum:22,newNum:22,oldText:`	count := 0`,newText:`	count := 0`,type:`context`},{oldNum:23,newNum:23,oldText:`	for dy := -1; dy <= 1; dy++ {`,newText:`	for dy := -1; dy <= 1; dy++ {`,type:`context`},{oldNum:24,newNum:24,oldText:`		for dx := -1; dx <= 1; dx++ {`,newText:`		for dx := -1; dx <= 1; dx++ {`,type:`context`},{oldNum:25,newNum:25,oldText:`			if dx == 0 && dy == 0 {`,newText:`			if dx == 0 && dy == 0 {`,type:`context`},{oldNum:26,newNum:26,oldText:`				continue`,newText:`				continue`,type:`context`},{oldNum:27,newNum:27,oldText:`			}`,newText:`			}`,type:`context`},{oldNum:28,newNum:``,oldText:`			nx, ny := (x+dx)%g.width, (y+dy)%g.height`,newText:``,type:`delete`},{oldNum:``,newNum:28,oldText:``,newText:`			// Toroidal coordinate wrap across boundaries`,type:`insert`},{oldNum:``,newNum:29,oldText:``,newText:`			nx := (x + dx + g.width) % g.width`,type:`insert`},{oldNum:``,newNum:30,oldText:``,newText:`			ny := (y + dy + g.height) % g.height`,type:`insert`},{oldNum:29,newNum:31,oldText:`			if g.cells[ny][nx] {`,newText:`			if g.cells[ny][nx] {`,type:`context`},{oldNum:30,newNum:32,oldText:`				count++`,newText:`				count++`,type:`context`},{oldNum:31,newNum:33,oldText:`			}`,newText:`			}`,type:`context`},{oldNum:32,newNum:34,oldText:`		}`,newText:`		}`,type:`context`},{oldNum:33,newNum:35,oldText:`	}`,newText:`	}`,type:`context`},{oldNum:34,newNum:36,oldText:`	return count`,newText:`	return count`,type:`context`},{oldNum:35,newNum:37,oldText:`}`,newText:`}`,type:`context`}]}}function t(){return{id:`grid-test-go`,name:`grid_test.go`,fullName:`grid_test.go`,path:`pkg/life`,shortPath:`pkg/life/grid_test.go`,iconType:`go`,statusLetter:`U`,statusColor:`status-green`,additions:`+25`,deletions:`-0`,isUnifiedDiff:!0,diffLines:[{oldNum:``,newNum:1,oldText:``,newText:`package life_test`,type:`insert`},{oldNum:``,newNum:2,oldText:``,newText:``,type:`insert`},{oldNum:``,newNum:3,oldText:``,newText:`import (`,type:`insert`},{oldNum:``,newNum:4,oldText:``,newText:`	"testing"`,type:`insert`},{oldNum:``,newNum:5,oldText:``,newText:`	"github.com/example/conway/pkg/life"`,type:`insert`},{oldNum:``,newNum:6,oldText:``,newText:`)`,type:`insert`},{oldNum:``,newNum:7,oldText:``,newText:``,type:`insert`},{oldNum:``,newNum:8,oldText:``,newText:`func TestBlinkerOscillator(t *testing.T) {`,type:`insert`},{oldNum:``,newNum:9,oldText:``,newText:`	g := life.NewGrid(5, 5)`,type:`insert`},{oldNum:``,newNum:10,oldText:``,newText:`	g.Set(2, 1, true)`,type:`insert`},{oldNum:``,newNum:11,oldText:``,newText:`	g.Set(2, 2, true)`,type:`insert`},{oldNum:``,newNum:12,oldText:``,newText:`	g.Set(2, 3, true)`,type:`insert`},{oldNum:``,newNum:13,oldText:``,newText:``,type:`insert`},{oldNum:``,newNum:14,oldText:``,newText:`	// Step 1: Horizontal blinker becomes vertical`,type:`insert`},{oldNum:``,newNum:15,oldText:``,newText:`	step1 := g.Step()`,type:`insert`},{oldNum:``,newNum:16,oldText:``,newText:`	if !step1.Get(1, 2) || !step1.Get(2, 2) || !step1.Get(3, 2) {`,type:`insert`},{oldNum:``,newNum:17,oldText:``,newText:`		t.Errorf("expected vertical oscillator, got: %+v", step1)`,type:`insert`},{oldNum:``,newNum:18,oldText:``,newText:`	}`,type:`insert`},{oldNum:``,newNum:19,oldText:``,newText:``,type:`insert`},{oldNum:``,newNum:20,oldText:``,newText:`	// Step 2: Vertical blinker returns to horizontal`,type:`insert`},{oldNum:``,newNum:21,oldText:``,newText:`	step2 := step1.Step()`,type:`insert`},{oldNum:``,newNum:22,oldText:``,newText:`	if !step2.Get(2, 1) || !step2.Get(2, 2) || !step2.Get(2, 3) {`,type:`insert`},{oldNum:``,newNum:23,oldText:``,newText:`		t.Errorf("expected horizontal oscillator, got: %+v", step2)`,type:`insert`},{oldNum:``,newNum:24,oldText:``,newText:`	}`,type:`insert`},{oldNum:``,newNum:25,oldText:``,newText:`}`,type:`insert`}]}}function n(){return{id:`rules-go`,name:`rules.go`,fullName:`rules.go`,path:`pkg/life`,shortPath:`pkg/life/rules.go`,iconType:`go`,statusLetter:`M`,statusColor:`status-yellow`,additions:`+7`,deletions:`-1`,isUnifiedDiff:!0,diffLines:[{oldNum:1,newNum:1,oldText:`package life`,newText:`package life`,type:`context`},{oldNum:2,newNum:2,oldText:``,newText:``,type:`context`},{oldNum:3,newNum:3,oldText:`// RuleConfig defines birth and survival neighbor thresholds.`,newText:`// RuleConfig defines birth and survival neighbor thresholds.`,type:`context`},{oldNum:4,newNum:4,oldText:`type RuleConfig struct {`,newText:`type RuleConfig struct {`,type:`context`},{oldNum:5,newNum:5,oldText:`	Survive []int`,newText:`	Survive []int`,type:`context`},{oldNum:6,newNum:6,oldText:`	Birth   []int`,newText:`	Birth   []int`,type:`context`},{oldNum:7,newNum:7,oldText:`}`,newText:`}`,type:`context`},{oldNum:8,newNum:8,oldText:``,newText:``,type:`context`},{oldNum:9,newNum:``,oldText:`func DefaultRule() RuleConfig { return RuleConfig{[]int{2, 3}, []int{3}} }`,newText:``,type:`delete`},{oldNum:``,newNum:9,oldText:``,newText:`// ConwayB3S23 returns standard Conway (B3/S23) rules.`,type:`insert`},{oldNum:``,newNum:10,oldText:``,newText:`func ConwayB3S23() RuleConfig {`,type:`insert`},{oldNum:``,newNum:11,oldText:``,newText:`	return RuleConfig{`,type:`insert`},{oldNum:``,newNum:12,oldText:``,newText:`		Survive: []int{2, 3},`,type:`insert`},{oldNum:``,newNum:13,oldText:``,newText:`		Birth:   []int{3},`,type:`insert`},{oldNum:``,newNum:14,oldText:``,newText:`	}`,type:`insert`},{oldNum:``,newNum:15,oldText:``,newText:`}`,type:`insert`},{oldNum:10,newNum:16,oldText:``,newText:``,type:`context`}]}}function r(){return{id:`go-mod`,name:`go.mod`,fullName:`go.mod`,path:`conway-life`,shortPath:`go.mod`,iconType:`mod`,statusLetter:`M`,statusColor:`status-yellow`,additions:`+1`,deletions:`-1`,isUnifiedDiff:!0,diffLines:[{oldNum:1,newNum:1,oldText:`module github.com/example/conway-life`,newText:`module github.com/example/conway-life`,type:`context`},{oldNum:2,newNum:2,oldText:``,newText:``,type:`context`},{oldNum:3,newNum:``,oldText:`go 1.22`,newText:``,type:`delete`},{oldNum:``,newNum:3,oldText:``,newText:`go 1.26`,type:`insert`},{oldNum:4,newNum:4,oldText:``,newText:``,type:`context`},{oldNum:5,newNum:5,oldText:`require golang.org/x/sync v0.8.0`,newText:`require golang.org/x/sync v0.8.0`,type:`context`}]}}function i(){return{uncommitted:{title:`Changes`,files:[e()]},branch:{title:`Branch Changes`,files:[e(),t(),n(),r()]},agent_edits:{title:`Agent Edits`,files:[e(),t()]}}}i();function a(){return[{id:`term-1`,name:`zsh`,time:`09:16:00 AM`,historyHtml:``,historyCommands:[],historyIndex:-1}]}function o(e,t){let n=e.trim(),r=t.escapeHtml;if(n===`clear`)return{outputHtml:``,isClear:!0};let i=n.split(` `).filter(Boolean),a=i[0]?.toLowerCase(),o=i[1]?.toLowerCase();if(a===`help`||n===`git help`)return{outputHtml:`
      <div class="terminal-output">
        <span class="term-out-bold term-out-cyan">Available Demo Commands:</span><br/>
        <span class="term-out-green">git status</span>          - Show working tree status<br/>
        <span class="term-out-green">git diff</span>            - Show diff of modified files<br/>
        <span class="term-out-green">git add &lt;file&gt;</span>       - Stage file(s) for commit<br/>
        <span class="term-out-green">git commit -m "..."</span> - Commit staged changes &amp; update UI<br/>
        <span class="term-out-green">git branch</span>          - List local branches<br/>
        <span class="term-out-green">git log</span>             - Show commit logs<br/>
        <span class="term-out-green">go test ./...</span>       - Run test suite<br/>
        <span class="term-out-green">clear</span>               - Clear terminal screen<br/>
        <span class="term-out-green">help</span>                - Show this help message
      </div>
    `};if(a===`git`){if(!o||o===`status`)return t.hasUncommitted?{outputHtml:`
            <div class="terminal-output">
              <span>On branch <span class="term-out-cyan">feat/conway-toroidal-grid</span></span><br/>
              <span>Changes not staged for commit:</span><br/>
              <span class="term-out-dim">  (use "git add &lt;file&gt;..." to update what will be committed)</span><br/>
              <span class="term-out-dim">  (use "git restore &lt;file&gt;..." to discard changes in working directory)</span><br/>
              <span class="term-out-red">&nbsp;&nbsp;modified:&nbsp;&nbsp;&nbsp;pkg/life/grid.go</span><br/>
              <span class="term-out-red">&nbsp;&nbsp;modified:&nbsp;&nbsp;&nbsp;pkg/life/rules.go</span><br/>
              <span class="term-out-red">&nbsp;&nbsp;modified:&nbsp;&nbsp;&nbsp;go.mod</span><br/><br/>
              <span>Untracked files:</span><br/>
              <span class="term-out-dim">  (use "git add &lt;file&gt;..." to include in what will be committed)</span><br/>
              <span class="term-out-red">&nbsp;&nbsp;pkg/life/grid_test.go</span><br/><br/>
              <span class="term-out-dim">no changes added to commit (use "git add" and/or "git commit -a")</span>
            </div>
          `}:{outputHtml:`
          <div class="terminal-output">
            <span>On branch <span class="term-out-cyan">feat/conway-toroidal-grid</span></span><br/>
            <span class="term-out-green">nothing to commit, working tree clean</span>
          </div>
        `};if(o===`diff`)return{outputHtml:`
          <div class="terminal-output">
            <span class="term-out-bold">diff --git a/pkg/life/grid.go b/pkg/life/grid.go</span><br/>
            <span class="term-out-bold">--- a/pkg/life/grid.go</span><br/>
            <span class="term-out-bold">+++ b/pkg/life/grid.go</span><br/>
            <span class="term-out-cyan">@@ -28,1 +28,3 @@ func (g *Grid) CountNeighbors(x, y int) int</span><br/>
            <span class="term-out-red">-&nbsp;&nbsp;&nbsp;&nbsp;nx, ny := (x+dx)%g.width, (y+dy)%g.height</span><br/>
            <span class="term-out-green">+&nbsp;&nbsp;&nbsp;&nbsp;// Toroidal coordinate wrap across boundaries</span><br/>
            <span class="term-out-green">+&nbsp;&nbsp;&nbsp;&nbsp;nx := (x + dx + g.width) % g.width</span><br/>
            <span class="term-out-green">+&nbsp;&nbsp;&nbsp;&nbsp;ny := (y + dy + g.height) % g.height</span>
          </div>
        `};if(o===`add`)return{outputHtml:`
          <div class="terminal-output">
            <span class="term-out-dim">Changes staged for commit. Run 'git commit -m "..."' to commit.</span>
          </div>
        `};if(o===`commit`){if(!t.hasUncommitted)return{outputHtml:`
            <div class="terminal-output">
              <span>On branch <span class="term-out-cyan">feat/conway-toroidal-grid</span></span><br/>
              <span class="term-out-dim">nothing to commit, working tree clean</span>
            </div>
          `};let e=n.match(/-m\s+["'](.+?)["']/),i=e?e[1]:`feat(life): implement toroidal grid step and neighbor counting in Go`;return{performCommit:!0,commitMessage:i,outputHtml:`
          <div class="terminal-output">
            <span>[<span class="term-out-cyan">feat/conway-toroidal-grid</span> <span class="term-out-yellow">534db51</span>] ${r(i)}</span><br/>
            <span class="term-out-dim"> 4 files changed, 35 insertions(+), 3 deletions(-)</span><br/>
            <span class="term-out-dim"> create mode 100644 pkg/life/grid_test.go</span>
          </div>
        `}}return o===`branch`?{outputHtml:`
          <div class="terminal-output">
            <span class="term-out-green">* feat/conway-toroidal-grid</span><br/>
            <span>  main</span>
          </div>
        `}:o===`log`?{outputHtml:`
          <div class="terminal-output">
            <span class="term-out-yellow">commit 534db51b2c48</span> (<span class="term-out-cyan">HEAD -&gt; feat/conway-toroidal-grid</span>)<br/>
            <span class="term-out-dim">Author: Antigravity Developer &lt;developer@google.com&gt;</span><br/>
            <span class="term-out-dim">Date:   Wed Aug 12 14:34:00 2026 -0700</span><br/><br/>
            <span>    feat(life): implement toroidal grid step and neighbor counting in Go</span><br/><br/>
            <span class="term-out-yellow">commit a8f019b3e712</span> (<span class="term-out-dim">origin/main, main</span>)<br/>
            <span class="term-out-dim">Author: Antigravity Developer &lt;developer@google.com&gt;</span><br/>
            <span class="term-out-dim">Date:   Wed Aug 12 10:15:00 2026 -0700</span><br/><br/>
            <span>    init: bootstrap conway-life Go cellular automaton module</span>
          </div>
        `}:{outputHtml:`
        <div class="terminal-output term-out-red">
          git: '${r(o)}' is not a valid demo command. Try 'git status', 'git diff', 'git commit', or 'help'.
        </div>
      `}}return a===`go`&&(o===`test`||o===`run`)?{outputHtml:`
        <div class="terminal-output">
          <span>=== RUN   TestBlinkerOscillator</span><br/>
          <span class="term-out-green">--- PASS: TestBlinkerOscillator (0.00s)</span><br/>
          <span class="term-out-green">PASS</span><br/>
          <span class="term-out-dim">ok      github.com/example/conway/pkg/life    0.012s</span>
        </div>
      `}:a===`ls`?{outputHtml:`
        <div class="terminal-output">
          <span class="term-out-cyan">pkg</span>   go.mod   go.sum   README.md
        </div>
      `}:a===`pwd`?{outputHtml:`
        <div class="terminal-output">
          /Users/developer/projects/game-of-life
        </div>
      `}:{outputHtml:`
      <div class="terminal-output term-out-red">
        zsh: command not found: ${r(n)}. Type 'help' for available commands.
      </div>
    `}}function s(e){return e===`go`?`<span class="badge-icon-go">GO</span>`:e===`mod`?`<span class="badge-icon-mod">MOD</span>`:e===`mdx`?`<span class="badge-icon-mx">MX</span>`:e===`plus`?`<span class="badge-icon-plus">M+</span>`:`<span class="badge-icon-go">GO</span>`}function c(e,t,n,r){if(t.length===0&&!n)return``;let i=`<div class="inline-comment-thread-container">`;return t.forEach(t=>{i+=`
      <div class="inline-comment-card" data-comment-id="${t.id}">
        <div class="comment-body">${r(t.text)}</div>
        <div class="comment-footer">
          <button type="button" class="btn-delete-comment" data-action="delete-comment" data-line-key="${e}" data-comment-id="${t.id}">Delete</button>
          <button type="button" class="btn-edit-comment" data-action="edit-comment" data-line-key="${e}" data-comment-id="${t.id}">Edit Comment</button>
        </div>
      </div>
    `}),n&&(i+=`
      <div class="inline-comment-composer" data-line-key="${e}">
        <textarea class="comment-textarea" placeholder="Leave a comment" rows="2"></textarea>
        <div class="comment-actions">
          <button type="button" class="btn-cancel-comment" data-action="cancel-draft" data-line-key="${e}">Cancel</button>
          <div class="comment-right-actions">
            <button type="button" class="btn-submit-comment" data-action="submit-comment" data-line-key="${e}">Add Comment</button>
          </div>
        </div>
      </div>
    `),i+=`</div>`,i}function l(e,t,n,r){let i=``,a=``;return e.diffLines.forEach((o,s)=>{if(`isFold`in o&&o.isFold){let c=o.foldId||`${e.id}-fold-${s}`;if((t.has(c)||n)&&o.lines&&o.lines.length>0)o.lines.forEach((t,n)=>{let o=`
            <div class="code-line" data-file-id="${e.id}" data-line-idx="${s}_${n}">
              <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;">${t.oldNum||``}</span>
              <span style="flex:1;white-space:pre-wrap;color:var(--text-main);">${r(t.oldText||t.text||``)}</span>
            </div>
          `;i+=o,a+=o});else{let e=`
          <div class="fold-bar-wrapper">
            <button type="button" class="fold-bar" data-action="toggle-fold" data-fold-id="${c}" title="Click to show hidden lines">
              <span>${o.foldText}</span>
              ${o.rightBadge?`<span class="fold-badge">${o.rightBadge}</span>`:``}
            </button>
          </div>
        `;i+=e,a+=e}}else{let t=o;t.type===`delete`?(i+=`
          <div class="code-line delete-line" data-file-id="${e.id}" data-line-idx="${s}">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;color:#dc2626;">${t.oldNum||``}</span>
            <span style="flex:1;white-space:pre-wrap;font-weight:500;">${r(t.oldText||t.text||``)}</span>
          </div>
        `,a+=`
          <div class="code-line" style="background-color:#fafafa;opacity:0.4;user-select:none;">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;"></span>
            <span style="flex:1;white-space:pre-wrap;">&nbsp;</span>
          </div>
        `):t.type===`insert`?(i+=`
          <div class="code-line" style="background-color:#fafafa;opacity:0.4;user-select:none;">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;"></span>
            <span style="flex:1;white-space:pre-wrap;">&nbsp;</span>
          </div>
        `,a+=`
          <div class="code-line insert-line" data-file-id="${e.id}" data-line-idx="${s}">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;color:#16a34a;">${t.newNum||``}</span>
            <span style="flex:1;white-space:pre-wrap;font-weight:500;">${r(t.newText||t.text||``)}</span>
          </div>
        `):(i+=`
          <div class="code-line" data-file-id="${e.id}" data-line-idx="${s}">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;">${t.oldNum||``}</span>
            <span style="flex:1;white-space:pre-wrap;color:var(--text-main);">${r(t.oldText||t.text||``)}</span>
          </div>
        `,a+=`
          <div class="code-line" data-file-id="${e.id}" data-line-idx="${s}">
            <span class="diff-line-num" style="width:24px;text-align:right;padding-right:8px;font-size:11px;">${t.newNum||``}</span>
            <span style="flex:1;white-space:pre-wrap;color:var(--text-main);">${r(t.newText||t.text||``)}</span>
          </div>
        `)}}),`
    <div class="split-diff-grid">
      <div class="split-pane left-pane">
        <div class="split-pane-header">
          <span>BASE (ORIGINAL)</span>
          <span class="text-red">${e.deletions||`-0`} delete</span>
        </div>
        ${i}
      </div>
      <div class="split-pane">
        <div class="split-pane-header">
          <span>MODIFIED (WORKING TREE)</span>
          <span class="text-green">${e.additions||`+0`} insert</span>
        </div>
        ${a}
      </div>
    </div>
  `}function u(e,t,n,r,i,a){let o=`<div style="display:flex;flex-direction:column;gap:0;">`;return e.diffLines.forEach((s,l)=>{let u=`${e.id}-${l}`;if(`isFold`in s&&s.isFold){let u=s.foldId||`${e.id}-fold-${l}`;(t.has(u)||n)&&s.lines&&s.lines.length>0?s.lines.forEach((t,n)=>{let s=`${e.id}-sub-${u}-${n}`,d=t.newText===void 0?t.oldText===void 0?t.text||``:t.oldText:t.newText;o+=`
            <div class="code-line" data-file-id="${e.id}" data-line-idx="${l}_${n}">
              <span class="diff-line-num" style="width:20px;text-align:right;padding-right:6px;font-size:11px;color:#94a3b8;">${t.oldNum||``}</span>
              <span class="diff-line-num" style="width:20px;text-align:right;padding-right:12px;font-size:11px;color:#94a3b8;">${t.newNum||``}</span>
              
              <!-- Floating + Button on Line Hover -->
              <button type="button" class="inline-comment-btn" data-line-key="${s}" title="Add inline comment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
                <span class="inline-comment-tooltip">Add inline comment</span>
              </button>

              <span style="flex:1;white-space:pre-wrap;font-weight:400;color:var(--text-main);">${a(d)}</span>
            </div>
          `;let f=r[s]||[],p=i.has(s);o+=c(s,f,p,a)}):o+=`
          <div class="fold-bar-wrapper">
            <button type="button" class="fold-bar" data-action="toggle-fold" data-fold-id="${u}" title="Click to show hidden lines">
              <span>${s.foldText}</span>
              ${s.rightBadge?`<span class="fold-badge">${s.rightBadge}</span>`:``}
            </button>
          </div>
        `;return}let d=s,f=`code-line`,p=`#94a3b8`,m=`#94a3b8`;d.type===`delete`?(f+=` delete-line`,p=`#dc2626`):d.type===`insert`&&(f+=` insert-line`,m=`#16a34a`);let h=d.newText===void 0?d.oldText===void 0?d.text||``:d.oldText:d.newText;o+=`
      <div class="${f}" data-file-id="${e.id}" data-line-idx="${l}">
        <span class="diff-line-num" style="width:20px;text-align:right;padding-right:6px;font-size:11px;color:${p};">${d.oldNum||``}</span>
        <span class="diff-line-num" style="width:20px;text-align:right;padding-right:12px;font-size:11px;color:${m};">${d.newNum||``}</span>
        
        <!-- Floating + Button on Line Hover -->
        <button type="button" class="inline-comment-btn" data-line-key="${u}" title="Add inline comment">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
          <span class="inline-comment-tooltip">Add inline comment</span>
        </button>

        <span style="flex:1;white-space:pre-wrap;font-weight:${d.type===`context`?`400`:`500`};">${a(h)}</span>
      </div>
    `;let g=r[u]||[],_=i.has(u);o+=c(u,g,_,a)}),o+=`</div>`,o}function d(e,t){let n=t?`selected`:``,r=s(e.iconType);return`
    <div data-file-id="${e.id}" class="file-item-row ${n}">
      <div class="file-item-left">
        ${r}
        <span class="file-item-name">${e.shortPath||e.name}</span>
      </div>
      <span class="file-status-letter ${e.statusColor}">${e.statusLetter}</span>
    </div>
  `}function f(){return`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 0;text-align:center;color:#64748b;">
      <svg style="width:32px;height:32px;color:#94a3b8;margin-bottom:8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div style="font-size:12px;font-weight:500;color:#1e293b;">No file changes</div>
      <div style="font-size:11px;color:#64748b;margin-top:4px;">Working tree is clean</div>
      <button type="button" data-action="reset-demo" style="margin-top:16px;font-size:11px;color:#9333ea;background:none;border:none;cursor:pointer;text-decoration:underline;">Reset Demo</button>
    </div>
  `}function p(){return`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#64748b;padding:64px 0;">
      <svg style="width:40px;height:40px;color:#94a3b8;margin-bottom:12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/>
      </svg>
      <div style="font-size:14px;font-weight:500;color:#1e293b;">All changes committed</div>
      <div style="font-size:12px;color:#64748b;margin-top:4px;">There are no uncommitted changes in your workspace.</div>
      <button type="button" data-action="reset-demo" style="margin-top:16px;padding:6px 14px;border-radius:6px;background-color:#ffffff;border:1px solid #d1d5db;font-size:12px;color:#9333ea;cursor:pointer;font-weight:500;">Restore Mock Diff</button>
    </div>
  `}function m(e,t){return`
    <div class="file-header-container">
      <div class="file-header-left">
        <span class="active-file-icon">${s(e.iconType)}</span>
        <span class="current-review-file-name">${e.name}</span>
        <span class="current-review-file-path">${e.path}</span>
      </div>
      <div class="file-stats-container">
        <span class="current-additions text-green">${e.additions}</span>
        <span class="current-deletions text-red">${e.deletions}</span>
        <button type="button" class="fold-dropdown-btn" data-action="toggle-file-collapse" data-file-id="${e.id}" title="${t?`Expand file diff`:`Hide file diff`}">
          ${t?`<svg class="dropdown-chevron-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`:`<svg class="dropdown-chevron-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`}
        </button>
      </div>
    </div>
  `}function h(e,t){return`
    <div class="term-session-row ${t?`selected`:``}" data-session-id="${e.id}">
      <div class="term-session-left">
        <svg class="term-session-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M7 8l4 4-4 4M13 16h4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="term-session-name">${e.name}</span>
      </div>
      <button type="button" class="term-session-delete-btn" data-action="delete-terminal" data-session-id="${e.id}" title="Kill Terminal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `}function g(e){return`
    <div class="terminal-pane-block" data-session-id="${e.id}">
      <div class="terminal-history">${e.historyHtml}</div>
      <div class="terminal-active-block">
        <div class="terminal-prompt-info">
          <span class="term-path">~/projects/game-of-life</span>
          <span class="term-dots">.....</span>
          <span class="term-runtime">system node</span>
          <span class="term-time-sep">|</span>
          <span class="term-clock">${e.time}</span>
        </div>
        <div class="terminal-input-row">
          <span class="term-chevron">&gt;</span>
          <div class="terminal-input-wrapper">
            <input type="text" class="terminal-cli-input" data-session-id="${e.id}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" />
          </div>
        </div>
      </div>
    </div>
  `}function _(e,t){return e===`conversation`?`
      <div class="term-sidebar-section-title">Terminals</div>
      <div class="term-sessions-list">
        ${t}
      </div>
    `:`
    <div class="term-sidebar-section-title">Standalone</div>
    <div class="term-sidebar-section-sub">Conversations</div>
    <div class="term-conv-name">Toroidal coordinate wrap</div>
    <div class="term-sessions-list">
      ${t}
    </div>
  `}function ee(e,t,n,r){return`
    <div class="terminal-history-item">
      <div class="terminal-prompt-info">
        <span class="term-path">~/projects/game-of-life</span>
        <span class="term-dots">.....</span>
        <span class="term-runtime">system node</span>
        <span class="term-time-sep">|</span>
        <span class="term-clock">${e}</span>
      </div>
      <div class="terminal-input-row">
        <span class="term-chevron">&gt;</span>
        <span>${r(t)}</span>
      </div>
      ${n}
    </div>
  `}function v(e,t,n=3500){let r=e.querySelector(`.commit-toast`),i=e.querySelector(`.toast-message`);i&&(i.textContent=t),r&&(r.classList.remove(`hidden`),setTimeout(()=>r.classList.add(`hidden`),n))}function te(e,t,n){try{let r=`g`;t.case||(r+=`i`);let i=t.regex?e:n(e);return t.word&&(i=`\\b${i}\\b`),new RegExp(i,r)}catch{return null}}function y(e){e.querySelectorAll(`mark.search-highlight`).forEach(e=>{let t=e.parentNode;t&&(t.replaceChild(document.createTextNode(e.textContent||``),e),t.normalize())})}function ne(e,t){let n=e.querySelectorAll(`.code-line > span:not(.diff-line-num)`),r=[],i=0;return n.forEach(e=>{let n=e.textContent||``;if(!t.test(n))return;t.lastIndex=0;let a=document.createDocumentFragment(),o=0,s;for(;(s=t.exec(n))!==null;){s.index>o&&a.appendChild(document.createTextNode(n.substring(o,s.index)));let e=document.createElement(`mark`);if(e.className=`search-highlight`,e.dataset.matchIdx=String(i),e.textContent=s[0],a.appendChild(e),r.push(i),i++,o=t.lastIndex,!t.global)break}o<n.length&&a.appendChild(document.createTextNode(n.substring(o))),e.textContent=``,e.appendChild(a)}),r}function re(e,t,n,r){e.querySelectorAll(`.inline-comment-btn`).forEach(t=>{t.addEventListener(`click`,i=>{i.stopPropagation();let a=t.getAttribute(`data-line-key`);a&&(n.add(a),r(),setTimeout(()=>{(e.querySelector(`.inline-comment-composer[data-line-key="${a}"]`)?.querySelector(`.comment-textarea`))?.focus()},50))})}),e.querySelectorAll(`[data-action="cancel-draft"]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let i=e.getAttribute(`data-line-key`);i&&(n.delete(i),r())})}),e.querySelectorAll(`[data-action="submit-comment"]`).forEach(i=>{i.addEventListener(`click`,a=>{a.stopPropagation();let o=i.getAttribute(`data-line-key`);if(!o)return;let s=(e.querySelector(`.inline-comment-composer[data-line-key="${o}"]`)?.querySelector(`.comment-textarea`))?.value.trim();s&&(t[o]||(t[o]=[]),t[o].push({id:`comment-`+Math.random().toString(36).substring(2,8),text:s}),n.delete(o),r())})}),e.querySelectorAll(`[data-action="delete-comment"]`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let i=e.getAttribute(`data-line-key`),a=e.getAttribute(`data-comment-id`);i&&a&&t[i]&&(t[i]=t[i].filter(e=>e.id!==a),t[i].length===0&&delete t[i],r())})}),e.querySelectorAll(`[data-action="edit-comment"]`).forEach(i=>{i.addEventListener(`click`,a=>{a.stopPropagation();let o=i.getAttribute(`data-line-key`),s=i.getAttribute(`data-comment-id`);if(o&&s&&t[o]){let i=t[o].find(e=>e.id===s);i&&(t[o]=t[o].filter(e=>e.id!==s),t[o].length===0&&delete t[o],n.add(o),r(),setTimeout(()=>{let t=e.querySelector(`.inline-comment-composer[data-line-key="${o}"]`)?.querySelector(`.comment-textarea`);t&&(t.value=i.text,t.focus())},50))}})})}function ie(e,t,n){e.querySelectorAll(`.terminal-cli-input`).forEach(e=>{let r=e,i=r.getAttribute(`data-session-id`),a=t.find(e=>e.id===i);a&&r.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),n(a,r.value),r.value=``):e.key===`ArrowUp`?(e.preventDefault(),a.historyCommands.length>0&&a.historyIndex>0&&(a.historyIndex--,r.value=a.historyCommands[a.historyIndex]||``)):e.key===`ArrowDown`&&(e.preventDefault(),a.historyCommands.length>0&&a.historyIndex<a.historyCommands.length-1?(a.historyIndex++,r.value=a.historyCommands[a.historyIndex]||``):(a.historyIndex=a.historyCommands.length,r.value=``))})}),e.querySelectorAll(`.terminal-pane-block`).forEach(e=>{e.addEventListener(`click`,()=>{e.querySelector(`.terminal-cli-input`)?.focus()})})}function ae(e,t){let n={branch:{prefix:`Branch:`,name:`feat/conway-toroidal-grid`,hideCommit:!0,check:`.check-branch`,btn:`.btn-opt-branch`},uncommitted:{prefix:`Workspace:`,name:`Uncommitted Changes`,hideCommit:!1,check:`.check-uncommitted`,btn:`.btn-opt-uncommitted`},agent_edits:{prefix:`Workspace:`,name:`Agent Edits`,hideCommit:!0,check:`.check-agent`,btn:`.btn-opt-agent`}},r=n[t]||n.agent_edits,i=e.querySelector(`.selected-prefix`),a=e.querySelector(`.selected-branch-name`);i&&(i.textContent=r.prefix),a&&(a.textContent=r.name),[`.check-branch`,`.check-uncommitted`,`.check-agent`].forEach(t=>e.querySelector(t)?.classList.toggle(`hidden`,t!==r.check)),[`.btn-opt-branch`,`.btn-opt-uncommitted`,`.btn-opt-agent`].forEach(t=>e.querySelector(t)?.classList.toggle(`selected`,t===r.btn)),e.querySelector(`.commit-btn-wrapper`)?.classList.toggle(`hidden`,r.hideCommit),e.querySelector(`.review-dropdown-menu`)?.classList.add(`hidden`)}function oe(e){document.addEventListener(`click`,t=>{let n=t.target;e.contains(n)&&[{trigger:`[data-action="toggle-dropdown"]`,menu:`.review-dropdown-menu`},{trigger:`[data-action="toggle-commit-dropdown"]`,menu:`.commit-dropdown-menu`},{trigger:`[data-action="toggle-terminal-dropdown"]`,menu:`.terminal-dropdown-menu`},{trigger:`[data-action="toggle-more-menu"]`,menu:`.more-context-menu`}].forEach(({trigger:t,menu:r})=>{!n.closest(t)&&!n.closest(r)&&e.querySelector(r)?.classList.add(`hidden`)})})}function se(e,t,n){e.querySelectorAll(`.term-session-row`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.closest(`[data-action="delete-terminal"]`))return;let r=e.getAttribute(`data-session-id`);r&&t(r)})}),e.querySelectorAll(`[data-action="delete-terminal"]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let r=e.getAttribute(`data-session-id`);r&&n(r)})})}function ce(e,t,n,r){e.querySelectorAll(`[data-action="toggle-file-collapse"]`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let i=e.getAttribute(`data-file-id`);i&&(t.has(i)?t.delete(i):t.add(i),r())})}),e.querySelectorAll(`[data-action="toggle-fold"]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let i=e.getAttribute(`data-fold-id`);i&&(n.has(i)?n.delete(i):n.add(i),r())})})}function b(n){if(!n||n.dataset.vcsInitialized===`true`)return;n.dataset.vcsInitialized=`true`;let r=i(),s={},c=new Set,b=new Set,x=new Set,S=a(),C=`term-1`,le=`vcs`,w=`project`,T=typeof window<`u`?window.innerWidth>768:!0,E=n.dataset.initialMode||`agent_edits`,D=`grid-go`,O=typeof window<`u`?window.innerWidth>768:!0,k=!1,A=!1,j=!1,M=``,N={case:!1,word:!1,regex:!1},P=[],F=-1,I=e=>n.querySelector(e),L=e=>Array.from(n.querySelectorAll(e));function R(e){return e?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function ue(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function z(){return new Date().toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!0})}function B(e){le=e,I(`.tab-btn-vcs`)?.classList.toggle(`active-tab`,e===`vcs`),I(`.tab-btn-terminal`)?.classList.toggle(`active-tab`,e===`terminal`),I(`.vcs-review-pane`)?.classList.toggle(`hidden`,e!==`vcs`),I(`.vcs-terminal-pane`)?.classList.toggle(`hidden`,e!==`terminal`),I(`[data-action="toggle-sidebar"]`)?.classList.toggle(`active`,e===`vcs`?O:T),e===`terminal`&&setTimeout(()=>{(n.querySelector(`.terminal-pane-block[data-session-id="${C}"]`)?.querySelector(`.terminal-cli-input`))?.focus()},50)}function de(){I(`.terminal-dropdown-menu`)?.classList.toggle(`hidden`)}function fe(){T=!T,I(`.terminal-sessions-sidebar`)?.classList.toggle(`collapsed`,!T),I(`[data-action="toggle-terminal-sidebar"]`)?.classList.toggle(`active`,T),le===`terminal`&&I(`[data-action="toggle-sidebar"]`)?.classList.toggle(`active`,T)}function pe(e){w=e;let t=I(`.terminal-dropdown-selected-label`);t&&(t.textContent=e===`project`?`Project Terminals`:`Active Conversation`),I(`[data-terminal-filter="project"]`)?.classList.toggle(`selected`,e===`project`),I(`[data-terminal-filter="conversation"]`)?.classList.toggle(`selected`,e===`conversation`),I(`.check-term-project`)?.classList.toggle(`hidden`,e!==`project`),I(`.check-term-conversation`)?.classList.toggle(`hidden`,e!==`conversation`),I(`.terminal-dropdown-menu`)?.classList.add(`hidden`),H()}function V(){let e=I(`.terminal-panes-container`);if(!e)return;let t=S.find(e=>e.id===C)||S[0];t&&(C=t.id,e.innerHTML=g(t),ie(n,S,ge))}function H(){let e=I(`.terminal-sidebar-dynamic-container`);if(!e)return;let t=S.map(e=>h(e,e.id===C)).join(``);e.innerHTML=_(w,t),se(e,e=>{C=e,V(),H(),typeof window<`u`&&window.innerWidth<=768&&(T=!1,I(`.terminal-sessions-sidebar`)?.classList.add(`collapsed`),I(`[data-action="toggle-terminal-sidebar"]`)?.classList.remove(`active`),I(`[data-action="toggle-sidebar"]`)?.classList.remove(`active`))},e=>he(e))}function me(){let e=`term-`+Math.random().toString(36).substring(2,7),t=w===`conversation`?`agent-task-${S.length+1}`:`zsh (${S.length+1})`;S.push({id:e,name:t,time:z(),historyHtml:``,historyCommands:[],historyIndex:-1}),C=e,H(),V(),setTimeout(()=>{(n.querySelector(`.terminal-pane-block[data-session-id="${e}"]`)?.querySelector(`.terminal-cli-input`))?.focus()},50)}function he(e){if(S.length<=1){S[0].historyHtml=``,S[0].historyCommands=[],S[0].historyIndex=-1,S[0].time=z(),V();return}S=S.filter(t=>t.id!==e),C===e&&(C=S[0].id),H(),V()}function ge(e,t){let i=t.trim();if(!i)return;e.historyCommands.push(i),e.historyIndex=e.historyCommands.length;let a=o(i,{hasUncommitted:(r.uncommitted.files?.length||0)>0,escapeHtml:R});a.isClear?e.historyHtml=``:(a.performCommit&&Y(),e.historyHtml+=ee(e.time,i,a.outputHtml,R)),e.time=z(),V(),setTimeout(()=>{(n.querySelector(`.terminal-pane-block[data-session-id="${e.id}"]`)?.querySelector(`.terminal-cli-input`))?.focus();let t=I(`.terminal-viewport`);t&&(t.scrollTop=t.scrollHeight)},50)}function U(){return r[E]||r.agent_edits}function W(){let e=U(),t=e.files.length,n=I(`.sidebar-title`),r=I(`.sidebar-file-count`);n&&(n.textContent=t===0?`No file changes`:e.title),r&&(r.textContent=t===0?``:`${t} file${t===1?``:`s`}`);let i=I(`.file-list-container`);if(i){if(t===0){i.innerHTML=f(),i.querySelector(`[data-action="reset-demo"]`)?.addEventListener(`click`,we);return}i.innerHTML=e.files.map(e=>d(e,e.id===D)).join(``),i.querySelectorAll(`.file-item-row`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-file-id`);t&&_e(t)})})}}function _e(e){D=e;let t=L(`.file-item-row`);t.length>0?t.forEach(t=>{t.classList.toggle(`selected`,t.getAttribute(`data-file-id`)===e)}):W();let r=n.querySelector(`[data-block-file-id="${e}"]`);r||=(G(),n.querySelector(`[data-block-file-id="${e}"]`));let i=I(`.code-viewer-container`),a=null;if(i&&r){let e=i.getBoundingClientRect();a=r.getBoundingClientRect().top-e.top+i.scrollTop}typeof window<`u`&&window.innerWidth<=768&&(O=!1,I(`.vcs-sidebar`)?.classList.add(`collapsed`),I(`[data-action="toggle-sidebar"]`)?.classList.remove(`active`)),i&&a!==null&&i.scrollTo({top:a,behavior:`smooth`}),M&&k&&Z(M)}function G(){let e=U(),t=I(`.code-viewer-container`);if(!t)return;if(e.files.length===0){t.innerHTML=p(),t.querySelector(`[data-action="reset-demo"]`)?.addEventListener(`click`,we);return}let r=``;e.files.forEach(e=>{let t=b.has(e.id);r+=`
        <div class="file-diff-block ${t?`file-is-collapsed`:``}" data-block-file-id="${e.id}">
          ${m(e,t)}
          <div class="file-lines-wrapper" ${t?`style="display: none;"`:``}>
            ${ve(e)}
          </div>
        </div>
      `}),t.innerHTML=r,ce(t,b,x,G),re(n,s,c,G),M&&k&&Z(M)}function ve(e){return A?l(e,x,j,R):u(e,x,j,s,c,R)}function K(e){E=e,ae(n,e);let t=U();t.files.length>0&&(D=t.files[0].id),W(),G()}function ye(){let e=U().files.length,t=I(`.modal-subtitle-prefix`);t&&(t.textContent=`Commit ${e} file${e===1?``:`s`} in feat/conway-toroidal-grid`),I(`.commit-modal-backdrop`)?.classList.remove(`hidden`);let n=I(`.commit-message-input`);n&&(n.value=`feat(life): implement toroidal grid step and neighbor counting in Go`,n.focus(),n.select())}function q(){I(`.commit-modal-backdrop`)?.classList.add(`hidden`)}function be(){I(`.commit-tooltip`)?.classList.add(`hidden`),I(`.commit-dropdown-menu`)?.classList.toggle(`hidden`)}function J(){I(`.commit-dropdown-menu`)?.classList.add(`hidden`),I(`.commit-tooltip`)?.classList.remove(`hidden`)}function xe(){J(),v(n,`Pushed changes to origin/feat/conway-toroidal-grid`)}function Se(){Y();let e=I(`.toast-message`);e&&(e.textContent=`Committed and pushed 4 files to feat/conway-toroidal-grid`)}function Ce(){J(),v(n,`Synced branch with origin/main`)}function Y(){q(),J(),r.uncommitted.files=[];let e=r.branch.files.find(e=>e.id===`grid-go`);e&&(e.statusLetter=`M`,e.statusColor=`status-yellow`),W(),G(),v(n,`Committed changes to feat/conway-toroidal-grid`)}function we(){r.uncommitted.files=[e()],r.agent_edits.files=[e(),t()];let n=r.branch.files.findIndex(e=>e.id===`grid-go`);n===-1?r.branch.files.unshift(e()):r.branch.files[n]=e(),D=`grid-go`,W(),G()}function Te(){O=!O,I(`.vcs-sidebar`)?.classList.toggle(`collapsed`,!O),I(`[data-action="toggle-sidebar"]`)?.classList.toggle(`active`,O)}function X(){k=!k;let e=I(`.vcs-find-bar`);if(e)if(e.classList.toggle(`hidden`,!k),k){let e=I(`.find-input`);e&&(e.focus(),e.select()),M&&Z(M)}else{let e=I(`.code-viewer-container`);e&&y(e),P=[],F=-1;let t=I(`.find-count-badge`);t&&(t.textContent=`No results`)}}function Ee(e){N[e]=!N[e],I(`[data-opt="${e}"]`)?.classList.toggle(`active`,N[e]),M&&Z(M)}function Z(e){M=e;let t=I(`.code-viewer-container`);t&&y(t),P=[],F=-1;let n=I(`.find-count-badge`);if(!e){n&&(n.textContent=`No results`);return}let r=te(e,N,ue);if(!r){n&&(n.textContent=`Invalid regex`);return}t&&(P=ne(t,r)),P.length>0&&(F=0,Q(0)),n&&(n.textContent=P.length===0?`No results`:`${F+1} of ${P.length}`)}function Q(e){if(P.length===0)return;F=(F+e+P.length)%P.length,L(`mark.search-highlight`).forEach(e=>{let t=e.getAttribute(`data-match-idx`)===String(F);e.classList.toggle(`current`,t),t&&e.scrollIntoView({behavior:`smooth`,block:`center`})});let t=I(`.find-count-badge`);t&&(t.textContent=`${F+1} of ${P.length}`)}function De(){A=!A,I(`[data-action="toggle-diff-layout"]`)?.classList.toggle(`active`,A),G()}function Oe(){j=!j,U().files.forEach(e=>{e.diffLines.forEach(t=>{if(`isFold`in t&&t.isFold){let n=t.foldId||`${e.id}-fold-auto`;j?x.add(n):x.delete(n)}})}),I(`[data-action="toggle-collapse-all"]`)?.classList.toggle(`active`,j),G()}Object.entries({"toggle-dropdown":()=>I(`.review-dropdown-menu`)?.classList.toggle(`hidden`),"tab-vcs":()=>B(`vcs`),"tab-terminal":()=>B(`terminal`),"toggle-terminal-dropdown":de,"terminal-add":me,"toggle-sidebar":Te,"toggle-terminal-sidebar":fe,"toggle-find":X,"prev-match":()=>Q(-1),"next-match":()=>Q(1),"open-commit":ye,"close-commit":q,"toggle-commit-dropdown":be,"commit-action-push":xe,"commit-action-commit-push":Se,"commit-action-sync":Ce,"perform-commit":Y,"toggle-more-menu":()=>I(`.more-context-menu`)?.classList.toggle(`hidden`),"toggle-diff-layout":De,"toggle-collapse-all":Oe}).forEach(([e,t])=>{L(`[data-action="${e}"]`).forEach(e=>e.addEventListener(`click`,t))}),L(`[data-terminal-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-terminal-filter`);t&&pe(t)})}),L(`[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-mode`);t&&K(t)})}),L(`[data-opt]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-opt`);t&&Ee(t)})});let $=I(`.find-input`);$&&($.addEventListener(`input`,e=>{Z(e.target.value)}),$.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),Q(e.shiftKey?-1:1)):e.key===`Escape`&&X()})),document.addEventListener(`keydown`,e=>{!n.matches(`:hover`)&&!n.contains(document.activeElement)||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`?(e.preventDefault(),X()):e.key===`Escape`?(q(),J(),[`.review-dropdown-menu`,`.terminal-dropdown-menu`,`.more-context-menu`].forEach(e=>I(e)?.classList.add(`hidden`))):e.key===`Enter`&&(e.ctrlKey||e.metaKey)&&(I(`.commit-modal-backdrop`)?.classList.contains(`hidden`)||Y()))}),oe(n),K(E),V(),H(),typeof window<`u`&&window.innerWidth<=768&&(O=!1,T=!1,I(`.vcs-sidebar`)?.classList.add(`collapsed`),I(`.terminal-sessions-sidebar`)?.classList.add(`collapsed`),I(`[data-action="toggle-sidebar"]`)?.classList.remove(`active`),I(`[data-action="toggle-terminal-sidebar"]`)?.classList.remove(`active`))}function x(){typeof document>`u`||document.querySelectorAll(`.agy-vcs-widget`).forEach(e=>{b(e)})}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,x):x(),document.addEventListener(`astro:page-load`,x),window.addEventListener(`agy:page-ready`,x));