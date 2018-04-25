package com.agoda.web.yongdae;

import org.springframework.stereotype.Component;

@Component
public class ResiList {
	int totalCount, startRow, endRow, blockSize, listBlock;

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}	
	
	public int getBlockSize() {
		return blockSize;
	}

	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}

	public int getListBlock() {
		return listBlock;
	}

	public void setListBlock(int listBlock) {
		this.listBlock = listBlock;
	}
	
	
}
